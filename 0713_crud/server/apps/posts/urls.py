from django.urls import path

from server.apps.posts.views import *

urlpatterns = [
    path("", posts_list),
    path("posts/<int:pk>", posts_read),
]
