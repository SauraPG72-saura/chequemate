from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from rest_framework import status
from .serializers import CustomUserSerializer, LoginSerializer
from api.models import CustomUser  # Import your custom user model
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate





# api/views.py
from rest_framework import viewsets
from .models import Task  # Ensure you have the Task model defined in models.py
from .serializers import TaskSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class RegisterAPI(APIView):
    permission_classes = [AllowAny]  # Allow anyone to access this endpoint
    
    def post(self, request):
        # Pass the incoming data to the serializer
        serializer = CustomUserSerializer(data=request.data)

        # Check if the data is valid
        if serializer.is_valid():
            # Save the user if validation passes
            serializer.save()
            return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)

        # If data is not valid, return the errors
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginAPI(APIView):
    permission_classes = [AllowAny]  # Allow anyone to access this endpoint

    def post(self, request):
        # Pass the data to the serializer
        serializer = LoginSerializer(data=request.data)

        # Validate the data
        if serializer.is_valid():
            user = serializer.validated_data["user"]

            # Generate or get the token for the user
            token, created = Token.objects.get_or_create(user=user)

            # Return the token in the response
            return Response({"token": token.key}, status=status.HTTP_200_OK)

        # If the data is invalid, return an error
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)