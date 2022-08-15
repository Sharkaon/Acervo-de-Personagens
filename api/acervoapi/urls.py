from rest_framework import routers
from acervoapi.views import PersonagemViewSet, DubladorViewSet

router = routers.DefaultRouter()
router.register('personagem', PersonagemViewSet, basename='Personagem')
router.register('dublador', DubladorViewSet, basename='Dublador')

urlpatterns = router.urls
