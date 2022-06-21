from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response  import JsonResponse
from .models import *
from .serializers import *
from rest_framework import decorators
from rest_framework.decorators import api_view
from django.db import connections
import json
# Create your views here.
### projet##
@csrf_exempt
def projet_CRUD(request , id=0):
    if request.method == 'GET':
        projets = Projet.objects.all()
        projetserilizer = Projetserilizer(projets, many=True)
        return JsonResponse(projetserilizer.data )

    elif request.method == "POST":
        projet_data = JSONParser().parse(request)
        projets_serializer = Projetserilizer(data = projet_data)
        if projets_serializer.is_valid():
            projets_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method == "PUT":
        projet_data = JSONParser().parse(request)
        projet=Projet.objects.get(id_projet=projet_data['id_projet'])
        projet_serializer =Projetserilizer(projet,data=projet_data)
        if projet_serializer.is_valid():
            projet_serializer.save()
            return JsonResponse("update Succesfully", safe=False)
        return JsonResponse("Failed to update")
    elif request.method=='DELETE':
        projet =Projet.objects.get(id_projet=id)
        projet.delete()
        return JsonResponse('deleted' , safe=False)

### equipe ##
@csrf_exempt
def equipe_CRUD(request, id=0):
    if request.method == 'GET':
        equipes = Equipe.objects.all()
        equipeserilizer = Equipeserilizer(equipes, many=True)
        return JsonResponse(equipeserilizer.data)
    elif request.method == "POST":
        equipe_data = JSONParser().parse(request)
        equipes_serializer = Equipeserilizer(data=equipe_data)
        if equipes_serializer.is_valid():
            equipes_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method == "PUT":
        equipe_data = JSONParser().parse(request)
        equipe = Equipe.objects.get(id_Equipe=equipe_data['id_Equipe'])
        equipe_serializer = Equipeserilizer(equipe, data=equipe_data)
        if equipe_serializer.is_valid():
            equipe_serializer.save()
            return JsonResponse("update Succesfully", safe=False)
        return JsonResponse("Failed to update")
    elif request.method == 'DELETE':
        equipe = Equipe.objects.get(id_Equipe=id)
        equipe.delete()
        return JsonResponse('deleted', safe=False)

### chefservice ##
@csrf_exempt
def chefservice_CRUD(request, id=0):
    if request.method == 'GET':
        chef_services = Chef_Service.objects.all()
        chefserviceserilizer = Chef_Serviceserilizer(chef_services, many=True)
        return JsonResponse(chefserviceserilizer.data)
    elif request.method == "POST":
        chef_services_data = JSONParser().parse(request)
        chef_services_serializer = Chef_Serviceserilizer(data=chef_services_data)
        if chef_services_serializer.is_valid():
            chef_services_serializer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method == "PUT":
        chef_services_data = JSONParser().parse(request)
        chef_service = Chef_Service.objects.get(Matricule=chef_services_data['Matricule'])
        chef_service_serializer = Chef_Serviceserilizer(chef_service, data=chef_services_data)
        if chef_service_serializer.is_valid():
            chef_service_serializer.save()
            return JsonResponse("update Succesfully", safe=False)
        return JsonResponse("Failed to update")
    elif request.method == 'DELETE':
        chef_service = Chef_Service.objects.get(Matricule=id)
        chef_service.delete()
        return JsonResponse('deleted', safe=False)

### employe ##
@csrf_exempt
def employe_CRUD(request, id=0):
    if request.method == 'GET':
        employe = Employe.objects.all()
        employeserilizer = Employeserilizer(employe, many=True)
        return JsonResponse(employeserilizer.data)
    elif request.method == "POST":
        employe_data = JSONParser().parse(request)
        employeserilizer = Employeserilizer(data=employe_data)
        if employeserilizer.is_valid():
            employeserilizer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method == "PUT":
        employe_data = JSONParser().parse(request)
        employe = Employe.objects.get(Matricule=employe_data['Matricule'])
        employe_serializer = Employeserilizer(employe, data=employe_data)
        if employe_serializer.is_valid():
            employe_serializer.save()
            return JsonResponse("update Succesfully", safe=False)
        return JsonResponse("Failed to update")
    elif request.method == 'DELETE':
        employe = Employe.objects.get(Matricule=id)
        employe.delete()
        return JsonResponse('deleted', safe=False)

### tache ##
@csrf_exempt
def tache_CRUD(request, id=0):
    if request.method == 'GET':
        tache = Tache.objects.all()
        tacheserilizer = Tacheserilizer(tache, many=True)
        return JsonResponse(tacheserilizer.data)
    elif request.method == "POST":
        tache_data = JSONParser().parse(request)
        tacheserilizer = Tacheserilizer(data=tache_data)
        if tacheserilizer.is_valid():
            tacheserilizer.save()
            return JsonResponse("Added Successfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method == "PUT":
        tache_data = JSONParser().parse(request)
        tache = Tache.objects.get(id_tache=tache_data['id_tache'])
        tache_serializer = Tacheserilizer(tache, data=tache_data)
        if tache_serializer.is_valid():
            tache_serializer.save()
            return JsonResponse("update Succesfully", safe=False)
        return JsonResponse("Failed to update")
    elif request.method == 'DELETE':
        tache = Tache.objects.get(id_tache=id)
        tache.delete()
        return JsonResponse('deleted', safe=False)

@csrf_exempt
def top_employe(request):
    if request.method == 'GET':
        cursor = connections['default'].cursor()
        cursor.execute("SELECT count(e.Matricule) as cpt , e.Matricule , e.Nom , e.Prenom from touchtask_employe e , touchtask_tache t where e.Matricule=t.Employe_id and t.Etat='fin'  ORDER BY cpt LIMIT 1")
        objs = cursor.fetchall()
        json_data = []
        for obj in objs:
            json_data.append({"count": obj[0], "Matricule": obj[1], "NOM": obj[2], "Prenom": obj[3]})
        return JsonResponse(json_data, safe=False)

@csrf_exempt
def modifier_tache_encours(request, id):
    if request.method == 'PUT':
        cursor = connections['default'].cursor()
        cursor.execute("update task_management_tache set Etat ='EN COURS' where id_tache=%s" %id )
        objs = cursor.fetchall()
        json_data = []
        json_data.append('update succesful')
        return JsonResponse(json_data, safe=False)
@csrf_exempt
def modifier_tache_fin(request, id):
    if request.method == 'PUT':
        cursor = connections['default'].cursor()
        cursor.execute("update task_management_tache set Etat ='FIN' where id_tache=%s" %id )
        objs = cursor.fetchall()
        json_data = []
        json_data.append('update succesful')
        return JsonResponse(json_data, safe=False)
@csrf_exempt
def get_tache_enattent(request):
    if request.method == 'GET':
        cursor = connections['default'].cursor()
        cursor.execute("SELECT  t.*, p.NomProjet, e.Nom, e.Prenom from task_management_tache t ,task_management_projet p ,task_management_employe e WHERE t.Employe_id=E.Matricule AND t.Projet_id=P.id_projet and t.Etat= 'En attente' GROUP by p.NomProjet")
        objs = cursor.fetchall()
        json_data = []
        for obj in objs:
            json_data.append({"id_tache": obj[0], "Nom_tache": obj[1], "Description": obj[2], "date_lancement": obj[3], "Etat": obj[4], "Employe_id": obj[5], "Projet_id": obj[6], "NomProjet": obj[7], "Nom": obj[8], "Prenom": obj[9]})
        return JsonResponse(json_data, safe=False)
@csrf_exempt
def get_tache_encours(request):
    if request.method == 'GET':
        cursor = connections['default'].cursor()
        cursor.execute("SELECT  t.*, p.NomProjet, e.Nom, e.Prenom from task_management_tache t ,task_management_projet p ,task_management_employe e WHERE t.Employe_id=E.Matricule AND t.Projet_id=P.id_projet and t.Etat= 'En COURS' GROUP by p.NomProjet")
        objs = cursor.fetchall()
        json_data = []
        for obj in objs:
            json_data.append({"id_tache": obj[0], "Nom_tache": obj[1], "Description": obj[2], "date_lancement": obj[3], "Etat": obj[4], "Employe_id": obj[5], "Projet_id": obj[6], "NomProjet": obj[7], "Nom": obj[8], "Prenom": obj[9]})
        return JsonResponse(json_data, safe=False)
@csrf_exempt
def get_tache_fin(request):
    if request.method == 'GET':
        cursor = connections['default'].cursor()
        cursor.execute("SELECT  t.*, p.NomProjet, e.Nom, e.Prenom from task_management_tache t ,task_management_projet p ,task_management_employe e WHERE t.Employe_id=E.Matricule AND t.Projet_id=P.id_projet and t.Etat= 'FIN' GROUP by p.NomProjet")
        objs = cursor.fetchall()
        json_data = []
        for obj in objs:
            json_data.append({"id_tache": obj[0], "Nom_tache": obj[1], "Description": obj[2], "date_lancement": obj[3], "Etat": obj[4], "Employe_id": obj[5], "Projet_id": obj[6], "NomProjet": obj[7], "Nom": obj[8], "Prenom": obj[9]})
        return JsonResponse(json_data, safe=False)