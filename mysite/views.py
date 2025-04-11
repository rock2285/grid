from django.views import View 
from django.shortcuts import render
from django.http import JsonResponse

grid ={}
for row in range(3):
	for col in range(3):
		grid["r" + str(row) + "c" + str(col)]=0

class Home(View):
	def get(self, request):

		return render(request,"home.html",{"grid":grid,"r":range(3)})

class Action(View):

	def get(self,request):
		return JsonResponse({"grid":grid},safe=False)

	def post(self,request):
		print(request.POST)
		id=(request.POST["id"])
		offset = int(request.POST["offset"])
		grid[id]=grid[id] + offset
		return JsonResponse({"grid":grid},safe=False)