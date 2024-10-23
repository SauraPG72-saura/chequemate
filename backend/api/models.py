# this is for importing the db model from Django itself

from django.db import models

from django.contrib.auth.models import AbstractUser


class Task(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class CustomUser(AbstractUser):
    phone_number = models.CharField(max_length=15, blank=True, default='0000000000')
    abn = models.CharField(max_length=11, blank=False, default='11111111111')  # ABN field
    gst_registration = models.BooleanField(blank=False, default=True)
    email = models.EmailField(unique=True)


    def __str__(self):
        return self.username


