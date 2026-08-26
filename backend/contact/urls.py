from django.urls import path
from . import views
from .resume_view import resume_download

urlpatterns = [
    path('contact/', views.contact_create, name='contact-create'),
    path('resume/', resume_download, name='resume-download'),
]