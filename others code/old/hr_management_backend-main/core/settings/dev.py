from .base import *


DEBUG = True

MEDIA_URL = "media/"
MEDIA_ROOT = BASE_DIR / "media"

FRONTEND_URL = "http://localhost:3000"

API_BASE = "http://localhost:8000/api/v1"

# logging
LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "handlers": {
        "file": {
            "level": "DEBUG",
            "class": "logging.FileHandler",
            "filename": "./debug.log",
        },
        # "mail_admins": {
        #     "level": "ERROR",
        #     "class": "django.utils.log.AdminEmailHandler",
        #     "include_html": True,
        # },
    },
    "loggers": {
        "": {  # empty string
            "handlers": ["file"],
            "level": "DEBUG",
            "propagate": True,
        },
    },
}
