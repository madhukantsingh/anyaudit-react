# Generated by Django 3.2.10 on 2022-09-08 06:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('newapp', '0004_heads'),
    ]

    operations = [
        migrations.CreateModel(
            name='Items',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('items', models.CharField(max_length=50)),
            ],
            options={
                'db_table': 'items',
            },
        ),
    ]