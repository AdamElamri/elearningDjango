from django.urls.resolvers import URLPattern

from django.urls import path

from . import views
from .views import search_results

urlpatterns = [
    path('', views.formations, name='formations'),
    path('search/', search_results, name='search'),

]
