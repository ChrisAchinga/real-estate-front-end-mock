# Generated by Django 3.1.5 on 2021-02-13 06:45

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_auto_20210212_2344'),
    ]

    operations = [
        migrations.CreateModel(
            name='Magazine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='Magazine Issue Name')),
                ('slug', models.SlugField(max_length=100, unique=True)),
                ('tag_line', models.CharField(help_text='Magazine issue tag line', max_length=190, verbose_name='Tag line')),
                ('cover_image', models.ImageField(upload_to='images/', verbose_name='Cover Photo')),
                ('description', ckeditor.fields.RichTextField(verbose_name='Magazine Issue Description')),
                ('issue_date', models.CharField(help_text='Example: July - May 2020', max_length=100, unique=True, verbose_name='Issue Date')),
                ('date', models.DateField(verbose_name='Date Created')),
            ],
            options={
                'verbose_name': 'Magazine Issue',
                'verbose_name_plural': 'Magazine Issue',
            },
        ),
    ]