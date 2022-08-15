from rest_framework import viewsets
from acervoapi.models import Dublador
from acervoapi.serializers import DubladorSerializer


class DubladorViewSet(viewsets.ModelViewSet):
    queryset = Dublador.objects.all()
    serializer_class = DubladorSerializer

