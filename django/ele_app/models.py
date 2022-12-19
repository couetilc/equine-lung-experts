from django.db import models

# Create your models here.
class ContactUsMessage(models.Model):
    name = models.CharField(max_length = 100)
    email = models.CharField(max_length = 320)
    message = models.TextField()
    ip_address = models.GenericIPAddressField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    def is_long_message():
        return message > 100

    def __str__(self):
        return self.name + '\n' + self.email + '\n' + self.message
