from django.shortcuts import get_object_or_404, render
from django.conf import settings
from rest_framework.permissions import IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend
from api.jobs.models import Candidate, CandidateTalentPool, Job, JobApplication, TalentPool, Team
from api.jobs.serializers import (
    CandidateSerializer,
    CandidateTalentPoolSerializer,
    JobApplicationListSerializer,
    AdminJobApplicationSerializer,
    JobApplicationSerializer,
    JobCreateSerializer,
    TalentPoolSerializer,
    TeamCreateSerializer,
    TeamDetailSerializer,
    TeamListSerializer,
)
from api.users.models import User
from core.libs.viewsets import CustomModelViewSet
from rest_framework.decorators import action, api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.core.mail import send_mail


class JobViewSet(CustomModelViewSet):
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    serializer_class = JobCreateSerializer

    def get_queryset(self):
        return Job.objects.filter(created_by=self.request.user)

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)
    
    @action(detail=True, methods=["post"], url_path="add-candidate")
    def add_candidate(self, request, pk=None):
        candidate = request.data.get("candidate")
        job = get_object_or_404(Job, pk=pk)
        serializer = CandidateSerializer(data=candidate)
        serializer.is_valid(raise_exception=True)
        candidate = serializer.save()
        job_application_data = {
        "job": job.id,  # Pass the job ID, not the object
        "candidate": candidate.id,  # Pass the candidate ID
        "pipeline": request.data.get("pipeline")
        }
        job_application = AdminJobApplicationSerializer(data=job_application_data, context={"request":request})
        job_application.is_valid(raise_exception=True)
        job_application.save()
        return Response(
            {"message": "Candidate added successfully"}, status=status.HTTP_200_OK
        )
    


class TeamViewSet(CustomModelViewSet):
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]

    def get_queryset(self):
        return Team.objects.all()

    def get_serializer_class(self):
        if self.action == "retrieve":
            return TeamDetailSerializer
        if self.action == "create":
            return TeamCreateSerializer
        return TeamListSerializer

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)

    @action(detail=False, methods=["put"], url_path="add-member")
    def add_member(self, request, *args, **kwargs):
        emails = request.data.get("emails")
        teams = request.data.get("teams")
        for team in teams:
            try:
                team_obj = Team.objects.get(id=team)
                for email in emails:
                    try:
                        user = User.objects.get(email=email)
                        team_obj.members.add(user)
                    except User.DoesNotExist:
                        continue
            except Team.DoesNotExist:
                continue
        return Response(
            {"message": "Members added successfully"}, status=status.HTTP_200_OK
        )


class TalentPoolViewSet(CustomModelViewSet):
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    serializer_class = TalentPoolSerializer

    def get_queryset(self):
        return TalentPool.objects.all()

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)

    @action(methods=["put"], detail=True, url_path="add-candidate")
    def add_candidate(self, request, pk=None):
        print(request.data)
        candidate = request.data.get("candidate")
        pool = get_object_or_404(TalentPool, pk=pk)
        serializer = CandidateSerializer(data=candidate)
        serializer.is_valid(raise_exception=True)
        candidate = serializer.save()
        candidate_talent_pool_data = {
            "talent_pool": pool.id,
            "candidate": candidate.id,
            "pipeline": request.data.get("pipeline"),
        }
        print(candidate_talent_pool_data)
        candidate_talent_pool = CandidateTalentPoolSerializer(data=candidate_talent_pool_data, context={"request": request})
        candidate_talent_pool.is_valid(raise_exception=True)
        candidate_talent_pool.save()
        return Response({"message": "Candidate added successfully"}, status=status.HTTP_200_OK)
        

class CandidateViewSet(CustomModelViewSet):
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]

    def get_queryset(self):
        return Candidate.objects.all()

    def create(self, request, *args, **kwargs):
        pool_id = request.data.get("pool_id")
        job_id = request.data.get("job_id")
        pipeline = request.data.get("pipeline")
        candidate = request.data.get("candidate")
        if pool_id:
            pool = get_object_or_404(TalentPool, pk=pool_id)
        elif job_id:
            job = get_object_or_404(Job, pk=job_id)
        serializer = CandidateSerializer(data=candidate)
        serializer.is_valid(raise_exception=True)
        candidate = serializer.save()
        
        if pool:
            candidate_talent_pool_data = {
                "talent_pool": pool.id,
                "candidate": candidate.id,
                "pipeline": pipeline,
            }
            candidate_talent_pool = CandidateTalentPoolSerializer(data=candidate_talent_pool_data, context={"request": request})
            candidate_talent_pool.is_valid(raise_exception=True)
            candidate_talent_pool.save()
            return Response({"message": "Candidate created successfully"}, status=status.HTTP_201_CREATED)
        elif job:
            job_application_data = {
                "job": job.id,
                "candidate": candidate.id,
                "pipeline": pipeline,
            }
            job_application = AdminJobApplicationSerializer(data=job_application_data)
            job_application.is_valid(raise_exception=True)
            job_application.save()
            return Response({"message": "Candidate created successfully"}, status=status.HTTP_201_CREATED)
        return Response({"detail": "Invalid job or pool selected"}, status=status.HTTP_400_BAD_REQUEST)
            
        

    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)
    
    @action(methods="patch", detail=False, url_path="update-candidate")
    def copy_candidates(self, request, *args, **kwargs):
        candidate = request.data.get("candidate_id")
        pipeline = request.data.get("pipeline")
        pool_id = request.data.get("pool_id")
        job_id = request.data.get("job_id")
        candidate = get_object_or_404(Candidate, pk=candidate)
        if pool_id:
            pool = get_object_or_404(TalentPool, pk=pool_id)
            if CandidateTalentPool.objects.filter(talent_pool=pool, candidate=candidate).exists():
                return Response({"detail": "Candidate already exists in the talent pool"}, status=status.HTTP_400_BAD_REQUEST)
            candidate_talent_pool_data = {
                "talent_pool": pool.id,
                "candidate": candidate.id,
                "pipeline": pipeline,
                }
            candidate_talent_pool = CandidateTalentPoolSerializer(data=candidate_talent_pool_data)
            candidate_talent_pool.is_valid(raise_exception=True)
            candidate_talent_pool.save()
            
        elif job_id:
            job = get_object_or_404(Job, pk=job_id)
            if JobApplication.objects.filter(job=job, candidate=candidate).exists():
                return Response({"detail": "Candidate already exists in the job"}, status=status.HTTP_400_BAD_REQUEST)
            job_application_data = {
                "job": job.id,
                "candidate": candidate.id,
                "pipeline": pipeline,
            }
            job_application = JobApplicationSerializer(data=job_application_data)
            job_application.is_valid(raise_exception=True)
            job_application.save()
            
        return Response({"message": "Candidate copied successfully"}, status=status.HTTP_200_OK)
    
class JobApplicationViewSet(CustomModelViewSet):
    queryset = JobApplication.objects.all()
    serializer_class = JobApplicationSerializer
    
    def get_serializer_class(self):
        if self.action == "list":
            return JobApplicationListSerializer
        
        return JobApplicationSerializer
    
    def get_queryset(self):
        return JobApplication.objects.filter(job=self.request.query_params.get("job_id"))
    
    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
    
    def create(self, request, *args, **kwargs):
        import copy
        request_data = request.data.copy()
        job = request_data.pop("job")
        candidate = request_data.pop("candidate")
        serializer = CandidateSerializer(data=candidate)
        serializer.is_valid(raise_exception=True)
        candidate = serializer.save()
        job_application_data = {
            "job": job,
            "candidate": candidate.id,
        }
        serializer = JobApplicationSerializer(data=job_application_data, context={"request": request})
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"message": "Your application has been submitted. You will be reached out soon"}, status=status.HTTP_201_CREATED)
        
    
    
    @action(methods=["put"], detail=True, url_path="update-pipeline")
    def update_pipeline(self, request, pk=None):
        application = JobApplication.objects.get(pk=pk)
        pipeline = request.data.get("pipeline")
        application.pipeline = pipeline
        application.save()
        if pipeline=="Interview":
            send_mail(
                subject = "Interview Schedule",
                message = "You have been scheduled for an interview",
                from_email = "mailsanjog.regmi@gmail.com",
                recipient_list = [application.candidate.email],
                
            )
        elif pipeline == "Offer":
            send_mail(
                subject = "Job Offer",
                message = "Congratulations! You have been selected for the job",
                from_email = "mailsanjog.regmi@gmail.com",
                recipient_list = [application.candidate.email],
            )
        elif pipeline == "Rejected":
            send_mail(
                subject = "Job Application Rejected",
                message = "Sorry, your application has been rejected",
                from_email = "mailsanjog.regmi@gmail.com",
                recipient_list = [application.candidate.email],
            )
        elif pipeline == "Hired":
            send_mail(
                subject = "Job Offer",
                message = "Congratulations! You have been selected for the job",
                from_email = "mailsanjog.regmi@gmail.com",
                recipient_list = [application.candidate.email],
            )
        return Response({"message": "Pipeline updated successfully"}, status=status.HTTP_200_OK)
    
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def hr_home(request):
    res = []
    pools = TalentPool.objects.filter(company=request.user.company)
    pools_data = [{
        "id": pool.id,
        "name": pool.name,
        "no_of_candidates": pool.candidates.count(),
         "team": pool.team.name,
         "status": pool.status,
    } for pool in pools]
    jobs = Job.objects.filter(company=request.user.company)
    jobs_data = [{
        "id": job.id,
        "name": job.title,
        "no_of_applicants": job.applications.count(),
        "team": job.team.name,
        "created_date": job.created_date,
        "close_date": job.close_date,
    } for job in jobs]
    home_page_data = {
        "pools": pools_data,
        "jobs": jobs_data,
        "company": request.user.company.name,
        "user": request.user.username,
    }
    res.append(home_page_data)
    return Response(res, status=status.HTTP_200_OK)
    
    
        

        
    
    
    

