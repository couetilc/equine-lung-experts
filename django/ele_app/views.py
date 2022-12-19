from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect
from .models import ContactUsMessage
from django.template import loader
from django.urls import reverse

def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip

# Create your views here.
def index(request):
    return HttpResponse('this needs to be ele marketing page')

def messages(request):
    latest_message_list = ContactUsMessage.objects.order_by('-created_at')[:5]
    template = loader.get_template('messages/index.html')
    context = { 'latest_message_list': latest_message_list }
    return HttpResponse(template.render(context, request))
    # equivalently
    return render(request, 'messages/index.html', context);

def messages_detail(request, message_id):
    # NOTE: get_list_or_404 similarly exists and executes filter() on the model
    message = get_object_or_404(ContactUsMessage, pk = message_id)
    return render(request, 'messages/detail.html', { 'message': message })
    # equivalently
    try:
        message = ContactUsMessage.objects.get(pk = message_id)
    except ContactUsMessage.DoesNotExist:
        raise Http404("Question does not exist")
    return render(request, 'messages/detail.html', { 'message': message })

def messages_results(request, message_id):
    response = "You're looking at the results of message %s."
    return HttpResponse(response % message_id)

def messages_contact(request):

    try:
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']
        ip = get_client_ip(request)
    except (KeyError):
        return render(request, 'messages/detail.html', {
            'error_message': "You didn't provide contact us form contents"
        })
    else:
        m = ContactUsMessage(name=name, email=email, message=message, ip_address=ip)
        m.save()

        return HttpResponseRedirect(reverse('ele_app:messages_detail', args=(m.id,)))
