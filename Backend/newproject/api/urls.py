from django.urls import path
from .views import create_users, get_users

urlpatterns = [
    path('users/', get_users, name='get_users'),
    path('users/create/', create_users, name='create_users'),
]