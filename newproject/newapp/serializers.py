from rest_framework import serializers
from newapp.models import Bussiness,Type,Heads,Educational,Networth,Persons,Products,Family,Uom

class BussinessSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bussiness
        fields = ('id',
                  'name',
                  'description',
                  'location',                  
                  'products',
                  'type',
                  'IEAL',
                  'heads')



class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = ('tid',
                  'type'
                  )


class EducationalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Educational
        fields = ('id',
                  'qualification',
                  'board',
                  'percentage'
                  )

class HeadsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Heads
        fields = ('id',
                  'heads',
                  )

class NetworthSerializer(serializers.ModelSerializer):
    class Meta:
        model = Networth
        fields = ('id',
                  'assessment_year',
                  'dor',
                  'income',
                  'taxpaid'
                  )

class PersonsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persons
        fields = ('id',
                  'name',
                  'dob',
                  'phone',
                  'email',
                  'qualification',
                  'board',
                  'percentage',
                  'cibil',
                  'rbi',
                  'assessment_year',
                  'dor',
                  'income',
                  'taxpaid'
                  )
class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ('id',
                  'product_name',
                  'UOM')
class FamilySerializer(serializers.ModelSerializer):
    class Meta:
        model = Family
        fields = ('id',
                  'f_name',
                  'defaults',
                  'u_of_measurement')

class UomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Uom
        fields = ('id',
                  'family_name',
                  'measure')