from rest_framework import routers
from acervoapi.views import PersonagemViewSet

router = routers.DefaultRouter()
router.register('personagem', PersonagemViewSet, basename='Personagem')

urlpatterns = router.urls
