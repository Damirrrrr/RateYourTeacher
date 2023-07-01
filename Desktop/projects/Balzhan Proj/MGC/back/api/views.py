from django.shortcuts import render
from django.db.models import QuerySet
from django.http import JsonResponse
from rest_framework import generics
from rest_framework.decorators import api_view
from .models import *
from .serializers import *
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404

class ReportListAPIView(generics.ListAPIView):
    queryset = Report.objects.all()
    serializer_class = ReportSerializer

class ReportByIdAPIView(APIView):
    def get(self, request, id, *args, **kwargs):
        report = get_object_or_404(Report, id=id)
        serrep = ReportSerializer(report, many=False)
        return JsonResponse(serrep.data, safe=False)