from rest_framework import serializers
from newapp.models import Bussiness,Type,Heads,Educational,Networth,Persons,Products,Family,Uom,Company,Assets,Assetstype,Sister

class BussinessSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bussiness
        fields = '__all__'



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
                  'name',
                  'defaults',
                  'u_of_measurement')

class UomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Uom
        fields = ('id',
                  'name',
                  'measure')

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id',
                  'name',
                  'email',
                  'phone',                  
                  'pan',
                  'cinno',
                  'sister')

class AssetstypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assetstype
        fields = ('id',
                  'assetstype'
                  )                  

class AssetsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assets
        fields = '__all__'

class SisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sister
        fields = ('id',
                  'sister'
                  )
