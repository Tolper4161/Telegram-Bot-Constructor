from django.db import models
class Bot(models.Model):
    title = models.CharField(max_length=1000)
    constructor = models.CharField(max_length=1000)
