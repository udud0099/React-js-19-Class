from django.contrib import admin
from .models import User, RequestLog
# Register your models here.

class ReadOnlyModelAdmin(admin.ModelAdmin):
    def has_add_permission(self, request, obj=None):
        return False

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ["id", "username", "email", "created_at"]

@admin.register(RequestLog)
class RequestLogAdmin(ReadOnlyModelAdmin):  #
    list_display = ["id", "user", "endpoint", "method", "response_code", "created_at"]
    ordering = ["-id"]
    readonly_fields = [
        "id",
        "endpoint",
        "user",
        "response_code",
        "method",
        "remote_address",
        "exec_time",
        "body_response",
        "body_request",
        "created_at",
    ]
    list_filter = ["response_code", "method"]
    search_fields = ["endpoint", "user"]
