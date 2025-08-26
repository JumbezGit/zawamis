from django.db import models

class Users(models.Model):
    fname = models.CharField(max_length=100)
    Age = models.IntegerField()
def __str__(self):
    return self.fname
