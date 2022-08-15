from acervoapi.models.dublador import Dublador
from rest_framework import serializers


class DubladorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dublador
        fields = '__all__'

