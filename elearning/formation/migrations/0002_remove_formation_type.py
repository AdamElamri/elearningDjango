# Generated by Django 3.2.4 on 2021-06-12 04:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('formation', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='formation',
            name='type',
        ),
    ]
