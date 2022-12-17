from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("""
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <p>
                    Hello, world. You're at the polls index
                </p>
                <style>
                    body{background-color:black;color:white;}
                </style>
            </body>
        </html>
    """)
