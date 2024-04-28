"""
URL configuration for UserAuth project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, reverse
from accounts.views import *
from accounts import views
from rest_framework import routers

urlpatterns = [
    path('', home, name='home'),
    path('registration',  register_attempt, name='register_attempt'),
    path('login', login_attempt, name='login_attempt'),
    path('token', token_send, name='token_send'),
    path('send_mail', send_mail, name='send_mail'),
    path('success', success, name ='success'),
    path('verify/<auth_token>', verify, name = "verify"),
    path('error', error_page, name = "error"),
    path('savereg', savereg, name='savereg'),
    path('form', form, name='form'),
    path('password-reset/', password_reset, name='password_reset'),
    path('password-reset/done/', password_reset_done, name='password_reset_done'),
    path('password-reset/confirm/', password_reset_confirm, name='password_reset_confirm'),
    path('password-reset/complete/', password_reset_complete, name='password_reset_complete'),
    path('api/', include(routers.urls)),
    path('api-auth/', include('rest_framework.urls')),
]
