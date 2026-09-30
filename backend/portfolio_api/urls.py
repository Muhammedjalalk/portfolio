"""
URL configuration for portfolio_api project.
"""
from django.contrib import admin
from django.http import JsonResponse
from django.urls import include, path


def health(request):
    """Simple page used by UptimeRobot to keep the server awake."""
    return JsonResponse({"status": "ok"})


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('contact.urls')),
    path('health/', health),
]