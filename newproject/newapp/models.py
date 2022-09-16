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
    assessment_year=models.CharField(max_length=45)
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
    assessment_year = models.CharField(max_length=45) 
    dor = models.DateField(blank=True, null=True)
    income = models.CharField(max_length=45, blank=True, null=True)    
    taxpaid = models.CharField(max_length=45, blank=True, null=True)

    class Meta: 
        db_table = 'persons'