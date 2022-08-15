from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from acervoapi.models import Personagem, Dublador
from acervoapi.serializers.personagem import PersonagemSerializer, DeepPersonagemSerializer


class PersonagemViewSet(viewsets.ModelViewSet):
    queryset = Personagem.objects.all()
    serializer_class = PersonagemSerializer

    def retrieve(self, request, pk=None, *args, **kwargs):
        personagem = self.queryset.get(pk=pk)
        serializador = DeepPersonagemSerializer(personagem)
        personagens_serializados = serializador.data

        resposta = Response({ 'data': personagens_serializados })
        resposta.status_code = status.HTTP_200_OK
        return resposta

    @action(detail=False)
    def personagens_da_mesma_serie(self, request):
        serie_a_buscar = self.queryset.get(pk=request.query_params['id_personagem']).serie
        personagens = self.queryset.filter(serie__icontains=serie_a_buscar)

        serializador = self.get_serializer(personagens, many=True)
        personagens_serializados = serializador.data

        resposta = Response({
            'data': personagens_serializados
        })
        resposta.status_code = status.HTTP_200_OK if personagens else status.HTTP_204_NO_CONTENT
        return

    @action(detail=False, methods=['post'])
    def criar_varios(self, request):
        personagens = [Personagem(
            dublador=Dublador.objects.get(pk=p['dublador']),
            nome=p['nome'],
            serie=p['serie']
        ) for p in request.data]

        personagens_criados = Personagem.objects.bulk_create(personagens)
        serializador = self.get_serializer(personagens_criados, many=True)
        personagens_serializados = serializador.data

        resposta = Response({'data': personagens_serializados})
        resposta.status_code = status.HTTP_201_CREATED
        return resposta

    @action(detail=False, methods=['post'])
    def duplicar(self, request):
        id_original = request.data['id_personagem']
        personagem_original = self.queryset.get(pk=id_original)

        personagem_original.id_personagem = None
        personagem_original.save()
        serializador = self.get_serializer(personagem_original, many=False)
        personagem_serializado = serializador.data

        resposta = Response({'data': personagem_serializado})
        resposta.status_code = status.HTTP_201_CREATED
        return resposta

    @action(detail=False, methods=['post'])
    def deletar_varios(self, request):
        ids_personagens_pra_deletar = request.data['id_personagens']
        personagens_pra_deletar = Personagem.objects.filter(id_personagem__in=ids_personagens_pra_deletar)

        serializador = self.get_serializer(personagens_pra_deletar, many=True)
        personagens_serializados = serializador.data

        quantidade_deletados = personagens_pra_deletar.delete()

        resposta = Response({
            'data': {
                'deletados': personagens_serializados,
                'quantidade_deletados': quantidade_deletados
            }
        })
        resposta.status_code = status.HTTP_200_OK if quantidade_deletados != 0 else status.HTTP_204_NO_CONTENT
        return resposta
