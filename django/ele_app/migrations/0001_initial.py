# Generated by Django 4.1.4 on 2022-12-19 01:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ContactUsMessage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=320)),
                ('message', models.TextField()),
                ('ip_address', models.GenericIPAddressField()),
            ],
        ),
    ]
