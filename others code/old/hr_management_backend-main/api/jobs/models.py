from django.utils import timezone
from django.db import models
from django.conf import settings

from api.users.models import Company
from core.libs.models import TimeStampModel

# Create your models here.
EMPLOYMENT_TYPE_CHOICES = [
    ("Full Time", "Full Time"),
    ("Part Time", "Part Time"),
    ("Contract", "Contract"),
    ("Internship", "Internship"),
    ("Temporary", "Temporary"),
]


class Team(TimeStampModel):
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="teams")
    name = models.CharField(max_length=255)
    description = models.TextField()
    created_date = models.DateField(blank=True, null=True)
    members = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name="teams")

    def __str__(self):
        return self.name


class Job(TimeStampModel):
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="jobs")
    team = models.ForeignKey(
        Team, on_delete=models.CASCADE, related_name="jobs", blank=True, null=True
    )
    title = models.CharField(max_length=255)
    description = models.TextField()
    employment_type = models.CharField(max_length=255, choices=EMPLOYMENT_TYPE_CHOICES)
    location = models.CharField(
        max_length=255,
        choices=[("Remote", "Remote"), ("Onsite", "Onsite"), ("Hybrid", "Hybrid")],
    )
    salary = models.CharField(max_length=255, blank=True, null=True)
    created_date = models.DateField(blank=True, null=True)
    close_date = models.DateField(blank=True, null=True)
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="jobs",
        blank=True,
        null=True,
    )
    updated_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="updated_jobs",
        blank=True,
        null=True,
    )

    def __str__(self):
        return self.title


class Candidate(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=255)
    headline = models.TextField(blank=True, null=True)
    city = models.CharField(max_length=255, blank=True, null=True)
    cover_letter = models.TextField(blank=True, null=True)
    cv = models.FileField(upload_to="candidates/cv/", blank=True, null=True)

    def __str__(self):
        return self.full_name


class TalentPool(models.Model):
    company = models.ForeignKey(
        Company, on_delete=models.CASCADE, related_name="talent_pools"
    )
    name = models.CharField(max_length=255)
    team = models.ForeignKey(
        Team, on_delete=models.CASCADE, related_name="talent_pools", blank=True, null=True
    )
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="talent_pools"
    )
    status = models.CharField(max_length=255, choices=[("Active", "Active"), ("Closed", "Closed"), ("Archived", "Archived"), ("Draft", "Draft")], default="Active")

    @property
    def total_candidates(self):
        return self.candidates.count()

    def __str__(self):
        return self.name


class JobApplication(models.Model):
    company = models.ForeignKey(
        Company, on_delete=models.CASCADE, related_name="applications"
    )
    job = models.ForeignKey(Job, on_delete=models.CASCADE, related_name="applications")
    candidate = models.ForeignKey(
        Candidate,
        on_delete=models.CASCADE,
        related_name="applications",
        blank=True,
        null=True,
    )
    added_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="job_applications", blank=True, null=True
    )
    applied_date = models.DateField(default=timezone.now)
    pipeline = models.CharField(
        max_length=255,
        choices=[
            ("Applied", "Applied"),
            ("Feedback", "Feedback"),
            ("Interview", "Interview"),
            ("Offer", "Offer"),
            ("Rejected", "Rejected"),
            ("Hired", "Hired"),
        ], default="Applied"
    )

    class Meta:
        unique_together = ["job", "candidate"]

    def __str__(self):
        return self.job.title


class CandidateTalentPool(TimeStampModel):
    company = models.ForeignKey(
        Company, on_delete=models.CASCADE, related_name="candidate_talent_pools"
    )
    candidate = models.ForeignKey(
        Candidate, on_delete=models.CASCADE, related_name="talent_pools"
    )
    talent_pool = models.ForeignKey(
        TalentPool, on_delete=models.CASCADE, related_name="candidates"
    )
    added_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="candidate_talent_pools",
    )
    pipeline = models.CharField(
        max_length=255,
        choices=[
            ("Default", "Default"),
            ("Available", "Available"),
            ("Not Available", "Not Available"),
        ],
    )

    class Meta:
        unique_together = ["candidate", "talent_pool"]

    def __str__(self):
        return self.candidate.email
