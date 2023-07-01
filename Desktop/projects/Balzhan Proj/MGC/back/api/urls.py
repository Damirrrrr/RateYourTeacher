from django.template.defaulttags import url
from django.urls import path
from .views import *

urlpatterns = [
    path('reports/', ReportListAPIView.as_view()),
    path('report/<int:id>', ReportByIdAPIView.as_view()),
]