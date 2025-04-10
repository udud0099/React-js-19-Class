from .api import *
from rest_framework.routers import DefaultRouter, SimpleRouter
from django.conf import settings
from django.urls import path, include

router = DefaultRouter() if settings.DEBUG else SimpleRouter()

router.register("users", UserCreateViewSet, basename="users")
router.register("invitations", InvitationViewSet, basename="invitations")

urlpatterns = [
    path("", include(router.urls)),
    path("accept-invitation/<str:token>/", AcceptInvitationView.as_view(), name="accept-invitation"),
]