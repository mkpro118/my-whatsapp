# Generated by Django 3.2.3 on 2021-08-05 18:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20210801_2342'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newuser',
            name='date_joined',
            field=models.DateField(auto_now_add=True),
        ),
    ]
