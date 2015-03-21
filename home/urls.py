from django.conf.urls import patterns, url
from django.views.generic import TemplateView
from home import views

urlpatterns = patterns('',
	url(r'^login/', views.login, name="login"),
  	url(r'', TemplateView.as_view(template_name='index.html'))
)