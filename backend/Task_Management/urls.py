from django.urls import path
from . import views
urlpatterns =[
 path('api/projet',views.projet_CRUD),
 path('api/projet/<int:id>',views.projet_CRUD),

 path('api/equipe',views.equipe_CRUD),
 path('api/equipe/<int:id>',views.equipe_CRUD),

 path('api/chef_service',views.chefservice_CRUD),
 path('api/chef_service/<int:id>',views.chefservice_CRUD),

 path('api/employe',views.employe_CRUD),
 path('api/employe/<int:id>',views.employe_CRUD),
 path('api/employe/top_Employe',views.top_employe),

 path('api/tache',views.tache_CRUD),
 path('api/tache/<int:id>',views.tache_CRUD),
 path('api/tache/encours/<int:id>',views.modifier_tache_encours),
 path('api/tache/fin/<int:id>',views.modifier_tache_fin),
 path('api/tache/en_attent',views.get_tache_enattent),
 path('api/tache/en_cours',views.get_tache_encours),
 path('api/tache/en_cours',views.get_tache_fin),




]