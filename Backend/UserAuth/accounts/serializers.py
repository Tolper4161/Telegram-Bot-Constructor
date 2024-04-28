# import serializers from the REST framework
from rest_framework import serializers

# import the todo data model
from .models import Profile
 
# create a serializer class
class ProfileSerializer(serializers.ModelSerializer):
 
    # create a meta class
    class Meta:
        model = Profile
        fields = ('username', 'email', 'password1', 'password2')