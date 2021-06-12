from django.shortcuts import render
from formation.models import Formation
from .models import Formation
from .models import Categorie

# Create your views here.


def formations(request):

    formations = Formation.objects.all()
    categories = Categorie.objects.all()

    return render(request, "course-grid.html", {'formations': formations, 'categories': categories})
