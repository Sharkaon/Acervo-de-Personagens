# Generated by Django 3.2.8 on 2021-10-15 13:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Personagem',
            fields=[
                ('id_personagem', models.AutoField(primary_key=True, serialize=False)),
                ('nome', models.CharField(max_length=255)),
                ('serie', models.CharField(max_length=255)),
                ('dublador', models.CharField(max_length=255)),
            ],
        ),
    ]
