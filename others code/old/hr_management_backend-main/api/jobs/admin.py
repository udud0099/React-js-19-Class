from django.contrib import admin

# Register your models here.
from .models import Team, Job, Company, TalentPool, JobApplication, Candidate, CandidateTalentPool

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ["id", "name"]

@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ["id", "name"]
    
@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display = ["id", "title", "team"]
    
@admin.register(TalentPool)
class TalentPoolAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "team"]
    
@admin.register(JobApplication)
class JobApplicationAdmin(admin.ModelAdmin):
    list_display = ["id", "job", "candidate", "pipeline"]
    
@admin.register(Candidate)
class CandidateAdmin(admin.ModelAdmin):
    list_display = ["id", "full_name", "email"]
    
@admin.register(CandidateTalentPool)
class CandidateTalentPoolAdmin(admin.ModelAdmin):
    list_display = ["id", "candidate", "talent_pool"]
    
    