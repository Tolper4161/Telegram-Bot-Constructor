from django.shortcuts import render
from rest_framework.views import APIView
from .models import Bot
from .serializer import BotSerializer
from rest_framework.response import Response

class BotView(APIView):
    def get(self, request):
        output = [
            {
                "title": output.title,
                "constructor": output.constructor
            } for output in Bot.objects.all()
        ]
        return Response(output)
    
    def post(self, request):
        serializer = BotSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)