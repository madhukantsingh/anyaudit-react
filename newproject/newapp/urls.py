from django.conf.urls import url,include
from . import views

from django.conf.urls.static import static
from django.conf import settings
from django.urls import re_path as url


urlpatterns=[
    url(r'^business$',views.BusinessApi),
    url(r'^business/([0-9]+)$',views.BusinessApi),
    url(r'^type$',views.TypeApi),
    url(r'^type/([0-9]+)$',views.TypeApi),
    url(r'^heads$',views.HeadsApi),
    url(r'^heads/([0-9]+)$',views.HeadsApi),
    url(r'^educational$',views.EducationalApi),
    url(r'^educational/([0-9]+)$',views.EducationalApi),
    url(r'^networth$',views.NetworthlApi),
    url(r'^networth/([0-9]+)$',views.NetworthlApi),
    url(r'^persons$',views.PersonslApi),
    url(r'^persons/([0-9]+)$',views.PersonslApi),
    url(r'^products$',views.ProductsApi),
    url(r'^products/([0-9]+)$',views.ProductsApi),
    url(r'^family$',views.FamilyApi),
    url(r'^family/([0-9]+)$',views.FamilyApi),
    url(r'^uom$',views.UomApi),
    url(r'^uom/([0-9]+)$',views.UomApi),
]