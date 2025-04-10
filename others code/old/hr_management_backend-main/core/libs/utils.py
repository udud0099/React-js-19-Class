import threading
from django.core.mail import EmailMultiAlternatives


def send_email(subject, body, to):
    try:
        email = EmailMultiAlternatives(
            subject="Hello",
            body="Hello",
            from_email="",
            to=[""]
        )
        email.send()
    except Exception as e:
        print(f"An error occured while sending email: {e}")