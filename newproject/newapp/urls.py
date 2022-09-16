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
    # url(r'^items$',views.ItemsApi),
    # url(r'^items/([0-9]+)$',views.ItemsApi),
]