from django.shortcuts import render
from api.users.serializers import InvitationSerializer, UserCreateSerializer
from rest_framework.mixins import CreateModelMixin
from rest_framework.viewsets import GenericViewSet
from rest_framework.response import Response
from rest_framework import status
from api.users.models import Invitation, User
from core.libs.utils import send_email
from core.libs.viewsets import CustomModelViewSet
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.views import APIView
from rest_framework.decorators import action
from django.core.mail import send_mail

def get_tokens(user):
    refresh = RefreshToken.for_user(user)
    tokens= {
        "refresh": str(refresh),
        "access": str(refresh.access_token),
    }
    return tokens
    
def get_response(user_res, tokens):
    user_res["access"] = tokens["access"]
    user_res["refresh"] = tokens["refresh"]
    return user_res

# Create your views here.
class UserCreateViewSet(CreateModelMixin, GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserCreateSerializer
    permission_classes = [AllowAny]
    
    def create(self, request, *args, **kwargs):
        email = request.data.get("email")
        password = request.data.get("password")
        try:
            user = User.objects.get(email=email)
            match = user.check_password(password)
            if not match:
                return Response(
                    {"detail": "Invalid email or password"},
                    status=status.HTTP_400_BAD_REQUEST,
                )
            tokens = get_tokens(user)
            login_res = get_response(user.get_login_response(), tokens)
            return Response(login_res, status=status.HTTP_200_OK)
        
        except User.DoesNotExist:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            user = serializer.save()
            tokens = get_tokens(user)
            login_res = get_response(user.get_login_response(), tokens)
            return Response(login_res, status=status.HTTP_201_CREATED)
        
    @action(detail=False, methods=["post"], url_path="request-password-reset")
    def request_password_reset(self, request):
        email = request.data.get("email")
        try:
            user = User.objects.get(email=email)
            subject = "Password Reset Request"
            body = "Click on the link to reset your password"
            to = user.email
            send_email(subject, body, to)
            return Response(
                {"detail": "Password reset email sent"},
                status=status.HTTP_200_OK,
            )
        except User.DoesNotExist:
            return Response(
                {"detail": "User with this email not found"},
                status=status.HTTP_404_NOT_FOUND,
            )
            
    @action(methods="post", detail=False, url_path="change-password")
    def change_password(self, request):
        user = request.user
        old_password = request.data.get("old_password")
        new_password = request.data.get("new_password")
        confirm_password = request.data.get("confirm_password")
        if not user.check_password(old_password):
            return Response(
                {"detail": "Invalid old password"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        if new_password != confirm_password:
            return Response(
                {"detail": "Passwords do not match"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        user.set_password(new_password)
        user.save()
        return Response(
            {"detail": "Password changed successfully"},
            status=status.HTTP_200_OK,
        )
        
class UserViewSet(CustomModelViewSet):
    queryset = User.objects.all()
    
    def get_queryset(self):
        return self.queryset.filter()
        
class InvitationViewSet(CustomModelViewSet):
    queryset = Invitation.objects.all()
    serializer_class = InvitationSerializer
    permission_classes = [IsAuthenticated]
    
    def create(self, request, *args, **kwargs):
        email = request.data.get("email")
        if User.objects.filter(email=email).exists():
            return Response(
                {"detail": "User with this email already exists"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        invitation = self.get_serializer(data=request.data)
        invitation.is_valid(raise_exception=True)
        invitation.save()
        send_mail(
            subject = "Invitation",
            message = "You have been invited to join the company",
            from_email = "",
            recipient_list = [invitation.email],
        )
        return Response(
            {"detail": "Invitation sent"},
            status=status.HTTP_201_CREATED,
        )
class AcceptInvitationView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request, token):
        try:
            invitation = Invitation.objects.get(token=token)
            if invitation.is_expired():
                return Response(
                    {"detail": "Invitation has expired"},
                    status=status.HTTP_400_BAD_REQUEST,
                )
            password = request.data.get("password")
            if not password:
                return Response(
                    {"detail": "Password is required"},
                    status=status.HTTP_400_BAD_REQUEST,
                )
            user = User.objects.create_user(
                email=invitation.email,
                password=password,
                company=invitation.company,
            )
            tokens = get_tokens(user)
            login_res = get_response(user.get_login_response(), tokens)
            return Response(login_res, status=200)
        except Invitation.DoesNotExist:
            return Response({"detail": "Invalid token"}, status=400)