import logging
import resend

from django.conf import settings
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .serializers import ContactSerializer

logger = logging.getLogger(__name__)


@api_view(['POST'])
@permission_classes([AllowAny])
def contact_create(request):

    serializer = ContactSerializer(data=request.data)

    if not serializer.is_valid():
        return Response(
            {"success": False, "errors": serializer.errors},
            status=status.HTTP_400_BAD_REQUEST,
        )

    # Save contact to database
    contact = serializer.save()

    try:
        resend.api_key = settings.RESEND_API_KEY

        params = {
            "from": "onboarding@resend.dev",
            "to": [settings.CONTACT_RECEIVER_EMAIL],
            "subject": f"Portfolio contact: {contact.subject}",
            "html": f"""
                <h2>New message from your portfolio</h2>

                <p><strong>Name:</strong> {contact.name}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Subject:</strong> {contact.subject}</p>

                <h3>Message:</h3>
                <p>{contact.message}</p>

                <hr>

                <p>
                    You can reply directly to:
                    <strong>{contact.email}</strong>
                </p>
            """,
        }

        resend.Emails.send(params)

        return Response(
            {
                "success": True,
                "message": "Message sent successfully."
            },
            status=status.HTTP_201_CREATED,
        )

    except Exception:
        logger.exception("Contact email failed to send")

        return Response(
            {
                "success": False,
                "message": "Message was saved, but email could not be sent."
            },
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )