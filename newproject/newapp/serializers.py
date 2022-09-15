from rest_framework import serializers
from newapp.models import Bussiness,Type,Heads,Items

class BussinessSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bussiness
        fields = ('id',
                  'name',
                  'description',
                  'location',                  
                  'products',
                  'type',
                  'items',
                  'IEAL',
                  'heads')



class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = ('tid',
                  'type'
                  )


                  
class ItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Items
        fields = ('id',
                  'items'
                  )

class HeadsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Heads
        fields = ('id',
                  'heads'
                  )


