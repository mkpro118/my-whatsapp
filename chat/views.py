from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
# from django.http import HttpResponse

from .models import Group, Message
# Create your views here.


@login_required(login_url='login')
def home(request):
    groups = Group.objects.filter(members=request.user)
    context = {
        'user': request.user,
        'image': request.user.profile.image.url,
        'groups': groups,
    }
    return render(request, "chat/home.html", context=context)


@login_required
def chat(request, group):
    group_name = Group.objects.get(group_name=group)
    messages = Message.objects.filter(group=group_name).order_by('-time')
    groups = Group.objects.filter(members=request.user)

    context = {
        'user': request.user,
        'image': request.user.profile.image.url,
        'messages': messages,
        'groups': groups,
        'this': group_name,
    }
    return render(request, 'chat/chat.html', context=context)


@login_required
def del_msg(request, pk):
    try:
        msg = Message.objects.get(pk=pk)
        assert msg is not None
        msg.delete()
        return JsonResponse({
            'successful': True,
        })
    except AssertionError:
        return JsonResponse({
            'successful': False,
        })
