import random
from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
import uuid
from django.utils.translation import gettext_lazy as _
from django.utils.timezone import now, timedelta
from api.users.managers import CustomUserManager
from core.libs.models import TimeStampModel
# Create your models here.

class Company(models.Model):
    name = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    email = models.EmailField()

    def __str__(self):
        return self.name
class User(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(_('email address'), unique=True)
    username = models.CharField(max_length=255, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="users", blank=True, null=True)
    
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = CustomUserManager()
    
    def get_login_response(self):
        res = {
            "id": self.id,
            "email": self.email,
        }
        return res
        
    def generate_username(self):
        low = 1000
        high = 9999
        if self.email:
            first_name = self.email.split("@")[0]
        cleaned_first_name = "".join(filter(str.isalnum, first_name))
        match = True
        count = 0
        while match:
            random_number = random.randint(low, high)
            username = f"{cleaned_first_name.lower()}{random_number}"
            count += 1
            if count > (high - low):
                raise AssertionError(
                    "No unique usernames are available. Please Increase your limit."
                )
            if not User.objects.filter(username=username).exists():
                match = False
        return username
        
    def save(self, *args, **kwargs):
        if not self.username:
            self.username = self.generate_username()
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.email
    
class RequestLog(TimeStampModel):
    endpoint = models.CharField(
        max_length=1000, null=True
    )  # The url the user requested
    user = models.CharField(max_length=255)  # User that made request, if authenticated
    response_code = models.PositiveSmallIntegerField()  # Response status code
    method = models.CharField(max_length=10, null=True)  # Request method
    remote_address = models.CharField(max_length=1000, null=True)  # IP address of user
    exec_time = models.IntegerField(null=True)  # Time taken to create the response
    date = models.DateTimeField(auto_now=True)  # Date and time of request
    body_response = models.TextField(null=True)  # Response data
    body_request = models.TextField(null=True)  # Request data
    
    def __str__(self):
        return self.user
    
def default_expiry():
    """Returns the default expiry date (7 days from now)."""
    return now() + timedelta(days=7)
    
class Invitation(models.Model):
    email = models.EmailField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="invitations")
    token = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    invited_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name="sent_invitations")
    expires_at = models.DateTimeField(default=default_expiry)
    
    def is_expired(self):
        return now() > self.expires_at
    
    def __str__(self):
        return self.email
    
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    first_name = models.CharField(max_length=255, blank=True, null=True)
    last_name = models.CharField(max_length=255, blank=True, null=True)
    phone_number = models.CharField(max_length=255, blank=True, null=True)
    profile_picture = models.FileField(upload_to="users/profile_pictures/", blank=True, null=True)
    
    def __str__(self):
        return self.user.email