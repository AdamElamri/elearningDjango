from django.shortcuts import redirect, render
from formation.models import Formation
from .models import Formation
from .models import Categorie
#from .filters import FormationFilter
from django.core.paginator import EmptyPage, Paginator
# Create your views here.


def formations(request):
 #   myFilter = FormationFilter()
    categories = Categorie.objects.all()

    if request.method == 'POST':
        cat = request.POST.get('categorie')
        catID = Categorie.objects.get(name=cat)
        formations = Formation.objects.filter(categorie=catID)

        p = Paginator(formations, 6)
        page_num = request.GET.get('page', 1)

        list = []
        for i in range(1, p.num_pages+1):
            list.append(i)

        try:
            page = p.page(page_num)
        except EmptyPage:
            page = p.page(1)

        return render(request, "course-grid.html", {'formations': page, 'categories': categories, 'np': list, 'current': page_num, 'fnbr': formations})

    else:
        formations = Formation.objects.all()
        p = Paginator(formations, 6)
        page_num = request.GET.get('page', 1)

        list = []
        for i in range(1, p.num_pages+1):
            list.append(i)
        try:
            page = p.page(page_num)
        except EmptyPage:
            page = p.page(1)

        return render(request, "course-grid.html", {'formations': page, 'categories': categories, 'np': list, 'current': page_num})
