from core.libs.serializers import CustomModelSerializer
from rest_framework import serializers
from rest_framework.exceptions import ValidationError
from .models import Candidate, CandidateTalentPool, Job, JobApplication, TalentPool, Team

class TeamListSerializer(CustomModelSerializer):
    class Meta:
        model = Team
        fields = ["id", "name"]
        
class TeamDetailSerializer(CustomModelSerializer):
    jobs = serializers.SerializerMethodField()
    class Meta:
        model = Team
        fields = "__all__"
        
    def get_jobs(self, obj):
        return JobCreateSerializer(obj.jobs, many=True).data
class TeamCreateSerializer(CustomModelSerializer):
    
    class Meta:
        model = Team
        fields = ["id", "name", "members"]
        read_only_fields = ["id", "members"]
        
    def create(self, validated_data):
        validated_data["members"] = [self.context["request"].user]
        validated_data["company"] = self.context["request"].user.company
        return super().create(validated_data)
class JobCreateSerializer(CustomModelSerializer):
    
    class Meta:
        model = Job
        fields = ["id", "title", "description", "created_date", "close_date", "salary", "location", "employment_type", "team", "created_by", "updated_by", "company"]
        read_only_fields = ["id", "created_by", "updated_by", "company"]
        
    def create(self, validated_data):
        validated_data["created_by"] = self.context["request"].user
        validated_data["company"] = self.context["request"].user.company
        return super().create(validated_data)

    
    def update(self, instance, validated_data):
        validated_data["updated_by"] = self.context["request"].user
        return super().update(instance, validated_data)
    
class CandidateSerializer(CustomModelSerializer):
    
    class Meta:
        model = Candidate
        fields = ["id", "full_name",  "email", "phone", "headline", "city", "cover_letter", "cv"]
        
    def update(self, instance, validated_data):
        instance.full_name = validated_data.get("full_name", instance.full_name)
        instance.email = validated_data.get("email", instance.email)
        instance.phone = validated_data.get("phone", instance.phone)
        instance.headline = validated_data.get("headline", instance.headline)
        instance.city = validated_data.get("city", instance.city)
        instance.cover_letter = validated_data.get("cover_letter", instance.cover_letter)
        instance.cv = validated_data.get("cv", instance.cv)
        instance.save()
        return instance
    
class CandidateMinSerializer(CustomModelSerializer):
    class Meta:
        model = Candidate
        fields = ["id", "full_name", "email", "phone"]
    
class TalentPoolSerializer(CustomModelSerializer):
    
    class Meta:
        model = TalentPool
        fields = ["id", "name", "team", "company", "created_by", "status"]
        read_only_fields = ["id", "company", "created_by"]
        
    def create(self, validated_data):
        validated_data["company"] = self.context["request"].user.company
        validated_data["created_by"] = self.context["request"].user
        return super().create(validated_data)
    
    def update(self, instance, validated_data):
        return super().update(instance, validated_data)
        
class CandidateTalentPoolSerializer(CustomModelSerializer):
    class Meta:
        model = CandidateTalentPool
        fields = ["company", "candidate", "talent_pool", "added_by", "pipeline"]
        read_only_fields = ["company", "added_by"]
        
    def create(self, validated_data):
        request = self.context["request"]
        validated_data["company"] = request.user.company
        validated_data["added_by"] = request.user
        return super().create(validated_data)
    
class AdminJobApplicationSerializer(CustomModelSerializer):
    
    class Meta:
        model = JobApplication
        fields = ["id", "job", "candidate", "pipeline", "added_by", "applied_date", "company"]
        read_only_fields = ["company", "added_by", "applied_date"]
        
    def create(self, validated_data):
        validated_data["added_by"] = self.context["request"].user
        validated_data["company"] = self.context["request"].user.company
        
        return super().create(validated_data)
    
class JobApplicationSerializer(CustomModelSerializer):
    class Meta:
        model = JobApplication
        fields = ["id", "job", "candidate", "pipeline", "applied_date", "company"]
        read_only_fields = ["company", "applied_date"]
        
    def create(self, validated_data):
        validated_data["company"] = self.context["request"].user.company
        
        return super().create(validated_data)
    
class JobApplicationListSerializer(CustomModelSerializer):
    candidate = CandidateMinSerializer()
    
    class Meta:
        model = JobApplication
        fields = ["id", "candidate", "pipeline"]
        
    
    