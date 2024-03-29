# Generated by Django 3.2.8 on 2022-07-27 01:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('acervoapi', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Dublador',
            fields=[
                ('id_dublador', models.AutoField(primary_key=True, serialize=False)),
                ('nome', models.CharField(max_length=255)),
                ('data_nascimento', models.DateField(verbose_name='data de nascimento')),
            ],
        ),
        migrations.AlterField(
            model_name='personagem',
            name='dublador',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='acervoapi.dublador'),
        ),
    ]
