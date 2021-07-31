from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    return render(request,'index.htm')

def about(request):
    return HttpResponse("this is about homepage")

def second(request):
    return HttpResponse("this is second homepage")

def contact(request):
    return HttpResponse("this is my contact page")