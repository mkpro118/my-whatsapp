from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('chat/<str:group>', views.chat, name='chat'),
    path('del_msg/<int:pk>', views.del_msg, name='del-msg'),
]
