from django.db import models
from .dublador import Dublador


class Personagem(models.Model):
    id_personagem = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=255)
    serie = models.CharField(max_length=255)
    dublador = models.ForeignKey(Dublador, on_delete=models.CASCADE)

    def __str__(self):
        return self.nome
