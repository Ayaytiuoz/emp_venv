from . import views
from django.urls import path

app_name = 'Chefservice'

urlpatterns = [
path('', views.about, name = 'about'),
]