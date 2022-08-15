from django.db import models


class Dublador(models.Model):
    id_dublador = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=255)
    data_nascimento = models.DateField('data de nascimento')

    def __str__(self):
        return self.nome
