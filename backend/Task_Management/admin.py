from django.contrib import admin
from .models import *

# Register your models here
#importer les models pour les utiliser
admin.site.register(Projet)
admin.site.register(Equipe)
admin.site.register(Chef_Service)
admin.site.register(Employe)
admin.site.register(Tache)
