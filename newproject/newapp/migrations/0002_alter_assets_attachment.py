# Generated by Django 3.2.10 on 2022-09-22 08:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('newapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='assets',
            name='attachment',
            field=models.FileField(blank=True, max_length=255, null=True, upload_to=''),
        ),
    ]
