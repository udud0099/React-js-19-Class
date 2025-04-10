from . import api
from .api import *
from rest_framework.routers import DefaultRouter, SimpleRouter
from django.conf import settings
from django.urls import path, include

router = DefaultRouter() if settings.DEBUG else SimpleRouter()

router.register("jobs", JobViewSet, basename="jobs")
router.register("teams", TeamViewSet, basename="teams")
router.register("job-applications", JobApplicationViewSet, basename="job-applications")
router.register("candidates", CandidateViewSet, basename="candidates")
router.register("talent-pools", TalentPoolViewSet, basename="talent-pools")
urlpatterns = [
    path("", include(router.urls)),
    path("home/", api.hr_home, name="home"),
]