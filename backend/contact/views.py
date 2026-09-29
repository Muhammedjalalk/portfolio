import logging

import resend
from django.conf import settings
from django.utils.html import escape
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

    # Send email notification (a failure here should not break the response)
    try:
        resend.api_key = settings.RESEND_API_KEY

        resend.Emails.send({
            "from": "onboarding@resend.dev",
            "to": [settings.CONTACT_RECEIVER_EMAIL],
            "reply_to": contact.email,
            "subject": f"Portfolio contact: {contact.subject}",
            "html": f"""
                <h2>New message from your portfolio</h2>
                <p><strong>Name:</strong> {escape(contact.name)}</p>
                <p><strong>Email:</strong> {escape(contact.email)}</p>
                <p><strong>Subject:</strong> {escape(contact.subject)}</p>
                <h3>Message:</h3>
                <p>{escape(contact.message).replace(chr(10), "<br>")}</p>
            """,
        })

    except Exception:
        logger.exception("Contact email failed to send")

    return Response(
        {"success": True, "message": "Message sent successfully."},
        status=status.HTTP_201_CREATED,
    )