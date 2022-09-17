from django.db import models

# Create your models here.

class Bussiness(models.Model):
    id=models.AutoField(primary_key=True)
    name=models.CharField( max_length=100)
    description=models.CharField(max_length=450)
    location=models.CharField(max_length=45)
    products=models.CharField(max_length=45)
    type=models.CharField( max_length=50)
    IEAL=models.CharField( max_length=50)
    heads=models.CharField( max_length=50)
   
    
    class Meta:
        db_table ='bussiness'

class Type(models.Model):
    tid=models.AutoField(primary_key=True)
    type=models.CharField(max_length=50)


    class Meta:
        db_table="type"

class Heads(models.Model):
    id=models.AutoField(primary_key=True)
    heads=models.CharField(max_length=50)


    class Meta:
        db_table="heads"




class Educational(models.Model):
    id=models.AutoField(primary_key=True)
    qualification=models.CharField( max_length=100)
    board=models.CharField(max_length=450)
    percentage=models.CharField(max_length=45)

    class Meta:
        
        db_table = 'educational'

class Networth(models.Model):
    id=models.AutoField(primary_key=True)
    assessment_year=models.CharField(max_length=45,default=True,null = True)
    dor=models.DateField(auto_now=False, auto_now_add=False)
    income=models.CharField(max_length=45)
    taxpaid=models.EmailField(max_length=45)

    class Meta:
        db_table = 'networth'

class Persons(models.Model):
    id=models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    dob = models.DateField(blank=True, null=True)
    phone = models.CharField(max_length=4500)
    email = models.CharField(max_length=45)
    qualification = models.CharField(max_length=100, blank=True, null=True)
    board = models.CharField(max_length=450, blank=True, null=True)
    percentage = models.CharField(max_length=45, blank=True, null=True)
    cibil = models.CharField(max_length=45)
    rbi = models.CharField(max_length=45)
    assessment_year = models.CharField(max_length=45,default=0) 
    dor = models.DateField(blank=True, null=True)
    income = models.CharField(max_length=45, blank=True, null=True)    
    taxpaid = models.CharField(max_length=45, blank=True, null=True)

    class Meta: 
        db_table = 'persons'
        
class Products(models.Model):
    id=models.AutoField(primary_key=True)
    product_name=models.CharField(max_length=45)
    UOM=models.CharField(max_length=60)


    class Meta:
        db_table ='products'

class Uom(models.Model):
    id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=45)
    measure=models.CharField(max_length=15)

    class Meta:
        db_table ='uom'

class Family(models.Model):
    id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=45)
    defaults=models.CharField(max_length=15)
    u_of_measurement=models.CharField(max_length=15)

    class Meta:
        db_table ='family'


class Company(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    email = models.CharField(max_length=255, blank=True, null=True)
    phone = models.CharField(max_length=255, blank=True, null=True)
    pan = models.CharField(max_length=255, blank=True, null=True)
    cinno = models.CharField(max_length=255, blank=True, null=True)
    sister = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
       
        db_table = 'company'

class Assetstype(models.Model):
    id = models.AutoField(primary_key=True)
    assetstype = models.CharField(max_length=255)

    class Meta:
        
        db_table = 'assetstype'


class Assets(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    typeof = models.CharField(max_length=255, blank=True, null=True)
    area = models.CharField(max_length=255, blank=True, null=True)
    fmv = models.IntegerField(blank=True, null=True)
    sdv = models.CharField(max_length=255, blank=True, null=True)
    leftb = models.CharField(max_length=255, blank=True, null=True)
    rightb = models.CharField(max_length=255, blank=True, null=True)
    front = models.CharField(max_length=255, blank=True, null=True)
    back = models.CharField(max_length=255, blank=True, null=True)
    attachment = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        
        db_table = 'assets'

class Sister(models.Model):
    id = models.AutoField(primary_key=True)
    sister = models.CharField(max_length=255)

    class Meta:
       
        db_table = 'sister'