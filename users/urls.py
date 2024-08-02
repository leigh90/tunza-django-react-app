from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from users.views import Userlist, UserDetail, UserRegistrationView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView


urlpatterns = [
    path('', Userlist.as_view()),
    path('register', UserRegistrationView.as_view()),
    path('<int:pk>/', UserDetail.as_view()),
    path('token/',  TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'), 
    path('token/refresh/verify', TokenVerifyView.as_view(), name='verify_token'), 

]