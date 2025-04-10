import logging
import time
from datetime import datetime

from api.users.models import RequestLog

logger = logging.getLogger(__name__)


class APILogMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        start_time = time.time()
        response = self.get_response(request)
        duration = time.time() - start_time
        response_ms = duration * 1000
        # response_data = response.data
        response_data = getattr(response, "data", "")
        user = str(getattr(request, "user", ""))
        method = str(getattr(request, "method", "")).upper()
        status_code = str(getattr(response, "status_code", ""))
        token = str(getattr(request, "Authorization", ""))
        endpoint = request.build_absolute_uri()

        logger.info("*" * 80)
        logger.info(datetime.strftime(datetime.now(), "%Y-%m-%d  %H:%M:%S"))
        logger.info(f"Request Path: {endpoint}")
        logger.info(f"Request Method: {method}")
        logger.info(f"Response Time: {str(response_ms)} ms")
        logger.info(f"User: {user}")
        logger.info(f"Status Code: {status_code}")
        logger.info(f"Token: {token}")
        logger.info(f"Response Data: {response_data}")
        logger.info("*" * 80)

        request_log = RequestLog(
            endpoint=endpoint,
            response_code=status_code,
            method=method,
            remote_address=self.get_client_ip(request),
            exec_time=duration,
            body_request=request.readlines(),
            body_response=response_data,
        )

        if user:
            request_log.user = user
        else:
            request_log.user = "Anonymous"

        request_log.save()

        return response

    def get_client_ip(self, request):
        x_forwarded_for = request.META.get("HTTP_X_FORWARDED_FOR")
        if x_forwarded_for:
            _ip = x_forwarded_for.split(",")[0]
        else:
            _ip = request.META.get("REMOTE_ADDR")
        return _ip
