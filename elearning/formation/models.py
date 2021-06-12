from django.db import models

# Create your models here.


class Categorie(models.Model):
    name = models.CharField(max_length=100, unique=True)


class Formation(models.Model):  # will inherit the feature of a model
    name = models.CharField(max_length=100)
    img = models.ImageField(upload_to='pics')
    desc = models.TextField()
    price = models.IntegerField()
    etat = models.BooleanField(default=True)  # actived:true
    categorie = models.ForeignKey(
        Categorie, on_delete=models.CASCADE, null=False)
