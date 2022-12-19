from django.urls import path

from . import views

app_name = 'ele_app'
urlpatterns = [
    # /ele_app/
    path('', views.index, name = 'index'),
    # /ele_app/messages/
    path('messages/', views.messages),
    # /ele_app/messages/5
    path('messages/<int:message_id>/', views.messages_detail, name = 'messages_detail'),
    # /ele_app/messages/5/results
    path('messages/<int:message_id>/results', views.messages_results, name = 'results'),
    # /ele_app/messages/contact
    path('messages/contact/', views.messages_contact, name = 'contact'),
]
