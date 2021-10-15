from django.db import models


class Personagem(models.Model):
    id_personagem = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=255)
    serie = models.CharField(max_length=255)
    dublador = models.CharField(max_length=255)
