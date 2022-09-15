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
    items=models.CharField( max_length=50, null=True)
    
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

class Items(models.Model):
    id=models.AutoField(primary_key=True)
    items=models.CharField(max_length=50)


    class Meta:
        db_table="items"