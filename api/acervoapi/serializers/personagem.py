from rest_framework import serializers
from acervoapi.models.personagem import *


class PersonagemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personagem
        fields = '__all__'


class DeepPersonagemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personagem
        fields = ('id_personagem', 'nome', 'serie', 'dublador')
        depth = 1
