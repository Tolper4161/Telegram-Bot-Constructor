from pyexpat.errors import messages
import uuid
from django.shortcuts import *
from UserAuth import settings
from accounts.models import *

from django.contrib.auth import login, authenticate

def home(request):
    return render(request , 'home.html')

def login_attempt(request):
    return render(request, 'login.html')

def register_attempt(request):
    if request.method == 'POST':
        form = Profile(request.POST)
        if form.is_valid():
            username = request.POST.get('username')
            email = request.POST.get('email')
            password = request.POST.get('password')
            raw_password = form.cleaned_data.get('password')
            user = authenticate(username=user.username, password=raw_password)
            login(request, user)
            return redirect('/')

        try:
            if User.objects.filter(username = username).first():
              messages.success(request,'Username is taken.')
              return redirect('/register')
        
            elif User.objects.filter(email = email).first():
              messages.success(request, 'Email is taken')
              return redirect('/register')
        
            user_obj = User.objects.create(username = username, email=email)
            user_obj.set_password(password)
            user_obj.set_password(raw_password)

            profile_obj = Profile.objects.create(user = user_obj , send_mail = str(uuid.uuid4))
            profile_obj.save()

            return redirect('/send_mail')

        except Exception as e:
            print(e)

        
    return render(request , 'register.html')

def token_send(request):
    return render(request , 'token_send.html')

def success(request):
    return render(request , 'success.html')

def verify(request, auth_token):
    try:
        profile_obj = Profile.objects.filter(auth_token = auth_token).first()
        if profile_obj:
            profile_obj.is_verified = True
            profile_obj.save()
            messages.success(request, 'You account is been verified')
            return redirect('/login')
        else:
            return redirect('/error')
    except Exception as e:
        print(e)


def error_page(request):
    return render(request, 'error.html')   


def send_mail(request):
    return render(request, 'send_mail.html')


def savereg(request):
    return render (request , 'savereg.php')

def form(request):
    return render (request , 'form.php')

def csrf_failure(request, reason=""):
    ctx = {'message': 'some custom messages'}
    return render(request, 'token_send.html')

def password_reset(request):
    return render(request, 'password_reset_form.html')

def password_reset_done(request):
    return render(request, 'password_reset_done.html')

def password_reset_confirm(request):
    return render(request, 'password_reset_confirm.html')

def password_reset_complete(request):
    return render(request, 'password_reset_complete.html')

from rest_framework import viewsets
 
from .serializers import ProfileSerializer
 
from .models import Profile

class ProfileView(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()