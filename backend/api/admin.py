from django.contrib import admin
from .models import Task, CustomUser
from django.contrib.auth.admin import UserAdmin

# Register your models here.

# Define the custom admin class
# class CustomUserAdmin(admin.ModelAdmin):
#     list_display = ('username', 'email', 'phone_number')

# Register the model with the custom admin class
admin.site.register(CustomUser)



@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ['title', 'completed']  # This controls what fields are displayed in the admin list view