from rest_framework import viewsets
from acervoapi.models.personagem import *
from acervoapi.serializers.personagem import *


class PersonagemViewSet(viewsets.ModelViewSet):
    queryset = Personagem.objects.all()
    serializer_class = PersonagemSerializer
