from django.urls import path
from . import views
urlpatterns =[
 path('api/projet',views.projet_CRUD),
 path('api/projet/<int:id>',views.projet_CRUD),
 path('api/projet/Detail/<int:id>',views.get_projet_Detail),

 path('api/equipe',views.equipe_CRUD),
 path('api/equipe/<int:id>',views.equipe_CRUD),
 path('api/equipe/count_employe',views.get_employe_equipe),

 path('api/chef_service',views.chefservice_CRUD),
 path('api/chef_service/<int:id>',views.chefservice_CRUD),

 path('api/employe',views.employe_CRUD),
 path('api/employe/<int:id>',views.employe_CRUD),
 path('api/employe/top_Employe',views.top_employe),
 path('api/employe/by_equipe/<int:id>',views.get_employe_by_equipe),

 path('api/tache',views.tache_CRUD),
 path('api/tache/<int:id>',views.tache_CRUD),
 path('api/tache_employe',views.get_Tach_employe),
 path('api/tache/encours/<int:id>',views.modifier_tache_encours),
 path('api/tache/fin/<int:id>',views.modifier_tache_fin),
 path('api/tache/en_attent',views.get_tache_enattent),
 path('api/tache/en_cours',views.get_tache_encours),
 path('api/tache/fin',views.get_tache_fin),


]