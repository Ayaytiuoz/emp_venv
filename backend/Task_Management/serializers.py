from rest_framework import serializers
from .models import *


class Chef_Serviceserilizer(serializers.ModelSerializer):
    class Meta:
        model = Chef_Service
        fields ='__all__'

class Equipeserilizer(serializers.ModelSerializer):
    class Meta:
        model = Equipe
        fields ='__all__'
class Employeserilizer(serializers.ModelSerializer):
    class Meta:
        model = Employe
        fields ='__all__'
class Projetserilizer(serializers.ModelSerializer):
    class Meta:
        model = Projet
        fields ='__all__'

class Tacheserilizer(serializers.ModelSerializer):
    class Meta:
        model = Tache
        fields ='__all__'