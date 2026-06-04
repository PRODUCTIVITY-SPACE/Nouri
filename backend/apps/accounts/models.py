from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    class Role(models.TextChoices):
        ADMIN  = 'admin',  'Admin'
        CHEF   = 'chef',   'Chef'
        WAITER = 'waiter', 'Waiter'

    role        = models.CharField(max_length=10, choices=Role.choices, default=Role.ADMIN)
    restaurant  = models.ForeignKey('menu.Restaurant', null=True, blank=True, on_delete=models.SET_NULL, related_name='staff')
    phone       = models.CharField(max_length=20, blank=True)

    class Meta:
        db_table = 'accounts_user'

    def __str__(self):
        return f'{self.email} ({self.role})'
