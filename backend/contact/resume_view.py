import os
from django.conf import settings
from django.http import FileResponse, Http404


def resume_download(request):
    """
    GET /api/resume/
    Serves the resume PDF for download. Simplest possible approach —
    just drop your PDF at backend/media/resume.pdf (or wherever RESUME_PATH points).
    """
    resume_path = os.path.join(settings.BASE_DIR, 'media', 'resume.pdf')

    if not os.path.exists(resume_path):
        raise Http404("Resume not found.")

    return FileResponse(
        open(resume_path, 'rb'),
        as_attachment=True,
        filename='Muhammed_Jalal_Resume.pdf',
        content_type='application/pdf',
    )