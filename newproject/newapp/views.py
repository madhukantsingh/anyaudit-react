from operator import methodcaller
from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from newapp.models import Bussiness,Type,Heads,Educational,Networth,Persons
from newapp.serializers import BussinessSerializer,TypeSerializer,HeadsSerializer,EducationalSerializer,NetworthSerializer,PersonsSerializer

from django.core.files.storage import default_storage

# Create your views here.
@csrf_exempt
def BusinessApi(request,id = 0):
    if request.method=='GET':
        print(request,"tharun",id)
        if id:
            try:
                print(id, request,"intry")
                bussiness=Bussiness.objects.get(pk=id)
                print(id, request,"intry")
                print(bussiness)
                business_serializer=BussinessSerializer(bussiness,many=False)
                #print(business_serializer.data,"business_data")
                response =  JsonResponse(business_serializer.data, safe=False) 
            except:
                print("tharun exception")
        else:

            bussiness = Bussiness.objects.all()
            print(bussiness)
            business_serializer = BussinessSerializer(bussiness, many=True) 
            print(business_serializer.data,"business_data")
            response =  JsonResponse(business_serializer.data, safe=False)        
        return response


    elif request.method=='POST':
        print(request,"tharun",id)
        business_data=JSONParser().parse(request)
        print(business_data)
        business_serializer = BussinessSerializer(data=business_data)
        print("tharun",business_serializer)
        print(business_serializer.is_valid())
        if business_serializer.is_valid():
            business_serializer.save()
            print("tharun")
            response=JsonResponse("Added Successfully!!" , safe=False)
            print(response)
            return response
        return JsonResponse("Failed.",safe=False)

    elif request.method=='PUT':
        business_data = JSONParser().parse(request)
        bussiness=Bussiness.objects.get(id=business_data['id'])
        business_serializer=BussinessSerializer(bussiness,data=business_data)
        print("tharun",business_serializer)
        print(business_serializer.is_valid())
        if business_serializer.is_valid():
            business_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        print(id,"this is id")
        bussiness=Bussiness.objects.get(id=id)
        bussiness.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)
    

@csrf_exempt
def SaveFile(request):
    file=request.FILES['myFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)

@csrf_exempt
def TypeApi(request,tid = 0):
    if request.method=='GET':
        # print(request,"tharun",id)
        if tid:
            try:
                print(tid, request,"intry")
                type=Type.objects.get(pk=tid)
                print(tid, request,"intry")
                print(type)
                type_serializer=TypeSerializer(type,many=False)
                #print(business_serializer.data,"business_data")
                response =  JsonResponse(type_serializer.data, safe=False) 
                print(response)
            except:
                print("tharun exception")
        else:

            type = Type.objects.all()
            print(type)
            type_serializer = TypeSerializer(type, many=True) 
            # print(type_serializer.data,"business_data")
            response =  JsonResponse(type_serializer.data, safe=False)        
        return response
    elif request.method=='POST':
        print(request,"tharun",tid)
        type_data=JSONParser().parse(request)
        print(type_data)
        type_serializer = TypeSerializer(data=type_data)
        # print("tharun",type_serializer)
        # print(type_serializer.is_valid())
        if type_serializer.is_valid():
            type_serializer.save()
            print("tharun")
            response=JsonResponse("Added Successfully!!" , safe=False)
            print(response)
            return response
        return JsonResponse("Failed.",safe=False)

    elif request.method=='PUT':
        type_data = JSONParser().parse(request)
        type=Type.objects.get(tid=type_data['tid'])
        type_serializer=TypeSerializer(type,data=type_data)
        print("tharun",type_serializer)
        print(type_serializer.is_valid())
        if type_serializer.is_valid():
            type_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        print(id,"this is id")
        type=Type.objects.get(tid=tid)
        type.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def HeadsApi(request,id = 0):
    if request.method=='GET':
        print(request,"tharun",id)
        if id:
            try:
                print(id, request,"intry")
                heads=Heads.objects.get(pk=id)
                print(id, request,"intry")
                print(type)
                heads_serializer=HeadsSerializer(heads,many=False)
                # print(heads_serializer.data,"business_data")
                response =  JsonResponse(heads_serializer.data, safe=False) 
                print(response)
            except:
                print("tharun exception")
        else:

            heads =Heads.objects.all()
            print(heads)
            heads_serializer = HeadsSerializer(heads, many=True) 
            # print(heads_serializer.data,"business_data")
            response =  JsonResponse(heads_serializer.data, safe=False)        
        return response
    elif request.method=='POST':
        print(request,"tharun",id)
        heads_data=JSONParser().parse(request)
        print(heads_data)
        heads_serializer = HeadsSerializer(data=heads_data)
        print("tharun",heads_serializer)
        print(heads_serializer.is_valid())
        if heads_serializer.is_valid():
            heads_serializer.save()
            print("tharun")
            response=JsonResponse("Added Successfully!!" , safe=False)
            print(response)
            return response
        return JsonResponse("Failed.",safe=False)

    elif request.method=='PUT':
        heads_data = JSONParser().parse(request)
        heads=Heads.objects.get(id=heads_data['id'])
        heads_serializer=HeadsSerializer(heads,data=heads_data)
        print("tharun",heads_serializer)
        print(heads_serializer.is_valid())
        if heads_serializer.is_valid():
            heads_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        print(id,"this is id")
        heads=Heads.objects.get(id=id)
        heads.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)


@csrf_exempt
def EducationalApi(request,id = 0):
    if request.method=='GET':
        print(request,"tharun",id)
        if id:
            try:
                educational=Educational.objects.get(pk=id)
                educational_serializer=EducationalSerializer(educational,many=False)
                #print(business_serializer.data,"business_data")
                response =  JsonResponse(educational_serializer.data, safe=False) 
            except:
                print("exception")
        else:

            educational = Educational.objects.all()
            educational_serializer = EducationalSerializer(educational, many=True) 
            response =  JsonResponse(educational_serializer.data, safe=False)        
        return response


    elif request.method=='POST':
        educational_data=JSONParser().parse(request)
        educational_serializer = EducationalSerializer(data=educational_data)
        if educational_serializer.is_valid():
            educational_serializer.save()
            response=JsonResponse("Added Successfully!!" , safe=False)
            print(response)
            return response
        return JsonResponse("Failed.",safe=False)

    elif request.method=='PUT':
        educational_data = JSONParser().parse(request)
        educational=Educational.objects.get(id=educational_data['id'])
        educational_serializer=EducationalSerializer(educational,data=educational_data)
        
        if educational_serializer.is_valid():
            educational_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        print(id,"this is id")
        educational=Educational.objects.get(id=id)
        educational.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def PersonslApi(request,id = 0):
    if request.method=='GET':
        print(request,"tharun",id)
        if id:
            try:
                persons=Persons.objects.get(pk=id)
                persons_serializer=PersonsSerializer(persons,many=False)
                response =  JsonResponse(persons_serializer.data, safe=False) 
            except:
                print("exception")
        else:

            persons =Persons.objects.all()
            persons_serializer = PersonsSerializer(persons, many=True) 
            response =  JsonResponse(persons_serializer.data, safe=False)        
        return response
    elif request.method=='POST':
        persons_data=JSONParser().parse(request)
        persons_serializer = PersonsSerializer(data=persons_data)
        if persons_serializer.is_valid():
            persons_serializer.save()
            response=JsonResponse("Added Successfully!!" , safe=False)
            print(response)
            return response
        return JsonResponse("Failed.",safe=False)

    elif request.method=='PUT':
        persons_data = JSONParser().parse(request)
        persons=Persons.objects.get(id=persons_data['id'])
        persons_serializer=PersonsSerializer(persons,data=persons_data)
        if persons_serializer.is_valid():
            persons_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        persons=Persons.objects.get(id=id)
        persons.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def NetworthlApi(request,id = 0):
    if request.method=='GET':
        print(request,"tharun",id)
        if id:
            try:
                networth=Networth.objects.get(pk=id)
                networth_serializer=NetworthSerializer(networth,many=False)
                response =  JsonResponse(networth_serializer.data, safe=False) 
            except:
                print("exception")
        else:

            networth =Networth.objects.all()
            networth_serializer = NetworthSerializer(networth, many=True) 
            response =  JsonResponse(networth_serializer.data, safe=False)        
        return response
    elif request.method=='POST':
        networth_data=JSONParser().parse(request)
        print(networth_data,request)
        networth_serializer = NetworthSerializer(data=networth_data)
        # print(networth_serializer.data)
        if networth_serializer.is_valid():
            networth_serializer.save()
            response=JsonResponse("Added Successfully!!" , safe=False)
            print(response)
            return response
        return JsonResponse("Failed.",safe=False)

    elif request.method=='PUT':
        networth_data = JSONParser().parse(request)
        networth=Networth.objects.get(id=networth_data['id'])
        networth_serializer=NetworthSerializer(networth,data=networth_data)
        if networth_serializer.is_valid():
            networth_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)
    
    elif request.method=='DELETE':
        print(id,"this is id")
        networth=Networth.objects.get(id=id)
        networth.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

@csrf_exempt
def SaveFile(request):
    file=request.FILES['myFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)

