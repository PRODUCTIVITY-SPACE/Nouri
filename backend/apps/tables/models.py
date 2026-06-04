import uuid
from django.db import models


class Table(models.Model):
    restaurant   = models.ForeignKey('menu.Restaurant', on_delete=models.CASCADE, related_name='tables')
    table_number = models.PositiveSmallIntegerField()
    qr_token     = models.UUIDField(default=uuid.uuid4, unique=True, editable=False)
    qr_code_url  = models.URLField(blank=True)
    is_active    = models.BooleanField(default=True)

    class Meta:
        unique_together = [('restaurant', 'table_number')]
        ordering = ['table_number']

    def __str__(self):
        return f'Table {self.table_number} — {self.restaurant}'

    @property
    def qr_scan_url(self):
        return f'/?table={self.qr_token}'
