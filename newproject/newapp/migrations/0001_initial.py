# Generated by Django 3.2.10 on 2022-09-17 07:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Assets',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('location', models.CharField(max_length=255)),
                ('typeof', models.CharField(blank=True, max_length=255, null=True)),
                ('area', models.CharField(blank=True, max_length=255, null=True)),
                ('fmv', models.IntegerField(blank=True, null=True)),
                ('sdv', models.CharField(blank=True, max_length=255, null=True)),
                ('leftb', models.CharField(blank=True, max_length=255, null=True)),
                ('rightb', models.CharField(blank=True, max_length=255, null=True)),
                ('front', models.CharField(blank=True, max_length=255, null=True)),
                ('back', models.CharField(blank=True, max_length=255, null=True)),
                ('attachment', models.CharField(blank=True, max_length=255, null=True)),
            ],
            options={
                'db_table': 'assets',
            },
        ),
        migrations.CreateModel(
            name='Assetstype',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('assetstype', models.CharField(max_length=255)),
            ],
            options={
                'db_table': 'assetstype',
            },
        ),
        migrations.CreateModel(
            name='Bussiness',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=450)),
                ('location', models.CharField(max_length=45)),
                ('products', models.CharField(max_length=45)),
                ('type', models.CharField(max_length=50)),
                ('IEAL', models.CharField(max_length=50)),
                ('heads', models.CharField(max_length=50)),
            ],
            options={
                'db_table': 'bussiness',
            },
        ),
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
                ('email', models.CharField(blank=True, max_length=255, null=True)),
                ('phone', models.CharField(blank=True, max_length=255, null=True)),
                ('pan', models.CharField(blank=True, max_length=255, null=True)),
                ('cinno', models.CharField(blank=True, max_length=255, null=True)),
                ('sister', models.CharField(blank=True, max_length=255, null=True)),
            ],
            options={
                'db_table': 'company',
            },
        ),
        migrations.CreateModel(
            name='Educational',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('qualification', models.CharField(max_length=100)),
                ('board', models.CharField(max_length=450)),
                ('percentage', models.CharField(max_length=45)),
            ],
            options={
                'db_table': 'educational',
            },
        ),
        migrations.CreateModel(
            name='Family',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=45)),
                ('defaults', models.CharField(max_length=15)),
                ('u_of_measurement', models.CharField(max_length=15)),
            ],
            options={
                'db_table': 'family',
            },
        ),
        migrations.CreateModel(
            name='Heads',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('heads', models.CharField(max_length=50)),
            ],
            options={
                'db_table': 'heads',
            },
        ),
        migrations.CreateModel(
            name='Networth',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('assessment_year', models.CharField(default=True, max_length=45, null=True)),
                ('dor', models.DateField()),
                ('income', models.CharField(max_length=45)),
                ('taxpaid', models.EmailField(max_length=45)),
            ],
            options={
                'db_table': 'networth',
            },
        ),
        migrations.CreateModel(
            name='Persons',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('dob', models.DateField(blank=True, null=True)),
                ('phone', models.CharField(max_length=4500)),
                ('email', models.CharField(max_length=45)),
                ('qualification', models.CharField(blank=True, max_length=100, null=True)),
                ('board', models.CharField(blank=True, max_length=450, null=True)),
                ('percentage', models.CharField(blank=True, max_length=45, null=True)),
                ('cibil', models.CharField(max_length=45)),
                ('rbi', models.CharField(max_length=45)),
                ('assessment_year', models.CharField(default=0, max_length=45)),
                ('dor', models.DateField(blank=True, null=True)),
                ('income', models.CharField(blank=True, max_length=45, null=True)),
                ('taxpaid', models.CharField(blank=True, max_length=45, null=True)),
            ],
            options={
                'db_table': 'persons',
            },
        ),
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('product_name', models.CharField(max_length=45)),
                ('UOM', models.CharField(max_length=60)),
            ],
            options={
                'db_table': 'products',
            },
        ),
        migrations.CreateModel(
            name='Sister',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('sister', models.CharField(max_length=255)),
            ],
            options={
                'db_table': 'sister',
            },
        ),
        migrations.CreateModel(
            name='Type',
            fields=[
                ('tid', models.AutoField(primary_key=True, serialize=False)),
                ('type', models.CharField(max_length=50)),
            ],
            options={
                'db_table': 'type',
            },
        ),
        migrations.CreateModel(
            name='Uom',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=45)),
                ('measure', models.CharField(max_length=15)),
            ],
            options={
                'db_table': 'uom',
            },
        ),
    ]
