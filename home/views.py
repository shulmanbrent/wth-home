import json
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.template import RequestContext
from django.shortcuts import render_to_response


def login(request):
 # Request the context of the request.
    # The context contains information such as the client's machine details, for example.
	context = RequestContext(request)

    # Construct a dictionary to pass to the template engine as its context.
    # Note the key boldmessage is the same as {{ boldmessage }} in the template!
	result_list = []

	if request.method == 'GET':
		# Return a rendered response to send to the client.
	    # We make use of the shortcut function to make our lives easier.
	    # Note that the first parameter is the template we wish to use.
	    return render_to_response('login.html', {'result_list': result_list}, context)
	elif request.method == 'POST':
		# More to do here with Login Sequence
		# and check valeus against database
		# Fuck ya it is working
		return HttpResponseRedirect('/')
