# Generated by Django 3.2.10 on 2022-09-22 06:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('newapp', '0002_alter_assets_attachment'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bussiness',
            name='IEAL',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='bussiness',
            name='description',
            field=models.CharField(blank=True, max_length=450, null=True),
        ),
    ]
