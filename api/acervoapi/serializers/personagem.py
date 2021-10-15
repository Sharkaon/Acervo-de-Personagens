from rest_framework import serializers
from acervoapi.models.personagem import *


class PersonagemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personagem
        fields = '__all__'
