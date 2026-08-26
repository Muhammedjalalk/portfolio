import logging

from django.conf import settings
from django.core.mail import EmailMessage
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .serializers import ContactSerializer

logger = logging.getLogger(__name__)


@api_view(['POST'])
@permission_classes([AllowAny])
def contact_create(request):
    """
    POST /api/contact/
    Body: { "name": "...", "email": "...", "subject": "...", "message": "..." }
    Saves the message to the DB and emails you a copy.
    The email is set up so hitting "Reply" in your inbox replies
    directly to the visitor's email address, not back to yourself.
    """
    serializer = ContactSerializer(data=request.data)

    if not serializer.is_valid():
        return Response(
            {"success": False, "errors": serializer.errors},
            status=status.HTTP_400_BAD_REQUEST,
        )

    contact = serializer.save()

    if getattr(settings, "EMAIL_HOST_USER", None) and getattr(settings, "CONTACT_RECEIVER_EMAIL", None):
        try:
            email = EmailMessage(
                subject=f"Portfolio contact: {contact.subject}",
                body=(
                    f"New message from your portfolio site.\n\n"
                    f"Name: {contact.name}\n"
                    f"Email: {contact.email}\n"
                    f"Subject: {contact.subject}\n\n"
                    f"Message:\n{contact.message}\n\n"
                    f"---\n"
                    f"Just hit Reply — it will go directly to {contact.email}."
                ),
                from_email=settings.EMAIL_HOST_USER,
                to=[settings.CONTACT_RECEIVER_EMAIL],
                reply_to=[contact.email],  # <-- this is the key part
            )
            email.send(fail_silently=False)
        except Exception as exc:
            logger.error("Contact email failed to send: %s", exc)

    return Response(
        {"success": True, "message": "Message sent successfully."},
        status=status.HTTP_201_CREATED,
    )