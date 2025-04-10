from rest_framework.pagination import PageNumberPagination as BasePageNumberPagination
from rest_framework.response import Response
from rest_framework.utils.urls import remove_query_param, replace_query_param


class PageNumberPagination(BasePageNumberPagination):
    aggregate = None

    def get_paginated_response(self, data):
        return Response(self.get_response_data(data))

    def get_previous_link(self):
        if not self.page.has_previous():
            return None
        url = self.request.build_absolute_uri()
        page_number = self.page.previous_page_number()
        # if page_number == 1:
        # return remove_query_param(url, self.page_query_param)
        return replace_query_param(url, self.page_query_param, page_number)

    def get_response_data(self, data):
        count = self.page.paginator.count
        size = self.page_size
        pagination = {
            "count": count,
            "page": self.page.number,
            "pages": (count + (-count % size)) // size,  # round-up division
            "previous": self.get_previous_link(),
            "next": self.get_next_link(),
            "size": size,
        }
        response_data = {"pagination": pagination, "results": data}
        if self.aggregate:
            response_data["aggregate"] = self.aggregate
        return response_data