from rest_framework.renderers import JSONRenderer


class CustomRenderer(JSONRenderer):
    def render(self, data, accepted_media_type=None, renderer_context=None):
        status_code = renderer_context["response"].status_code
        try:
            message = data.get("detail", None) or data.get("message", None)
        except AttributeError as e:
            message = None

        response = {
            "status": "success",
            "code": status_code,
            "data": data,
            "message": message,
        }
        # if response.get("message", None):
        #     response["data"] = {}

        if not str(status_code).startswith("2"):
            response["status"] = "error"
            response["data"] = None
            try:
                response["message"] = data["detail"]
            except KeyError:
                response["data"] = data


        return super(CustomRenderer, self).render(
            response, accepted_media_type, renderer_context
        )
