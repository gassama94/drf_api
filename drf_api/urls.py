"""drf_api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from .views import root_route, logout_route



urlpatterns = [
    #path('', root_route),
    path('', TemplateView.as_view(template_name='index.html')),
    path('admin/', admin.site.urls),

    # Path included in Rest Framework for login and logout views.
    path('api/api-auth/', include('rest_framework.urls')),

    # Logout route above to be matched first
    path('dj-rest-auth/logout/', logout_route, name='custom_logout'),
    path('api/dj-rest-auth/', include('dj_rest_auth.urls')),
     path(
        'api/dj-rest-auth/registration/', 
        include('dj_rest_auth.registration.urls')
    ),
    path('api/', include('Profiles.urls')),
    path('api/', include('posts.urls')),
    path('api/', include('comments.urls')),
     path('api/', include('likes.urls')),
     path('api/', include('followers.urls')),
]


# Allows React to handle 404 errors
handler404 = TemplateView.as_view(template_name='index.html')