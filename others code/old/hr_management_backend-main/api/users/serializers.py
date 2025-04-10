from api.jobs.models import Company
from core.libs.serializers import CustomModelSerializer
from rest_framework.exceptions import ValidationError
from .models import Invitation, User

class UserCreateSerializer(CustomModelSerializer):
    
    def validate_password(self, password):
        if len(password) < 8:
            raise ValidationError("Password must be at least 8 characters long.")
        return password
    
    def create(self, validated_data):
        company = Company.objects.first()
        password = validated_data.pop("password")
        user = self.Meta.model(**validated_data)
        user.set_password(password)
        user.company = company
        user.save()
        return user
    
    class Meta:
        model = User
        fields = ["id", "email", "password"]
        extra_kwargs = {
            "password": {"write_only": True}
        }
    
class InvitationSerializer(CustomModelSerializer):
    
    class Meta:
        model = Invitation
        fields = ["email", "invited_by", "company", "token", "expires_at"]
        read_only_fields = ["company", "token", "expires_at", "invited_by"]
        
    def create(self, validated_data):
        request = self.context["request"]
        validated_data["invited_by"] = request.user
        validated_data["company"] = request.user.company
        return super().create(validated_data)
    
        