from django.db import models


class Notification(models.Model):
    class Recipient(models.TextChoices):
        CUSTOMER = 'customer', 'Customer'
        STAFF    = 'staff',    'Staff'

    class Channel(models.TextChoices):
        WEBSOCKET = 'websocket', 'WebSocket'
        PUSH      = 'push',      'Web Push'

    order          = models.ForeignKey('orders.Order', on_delete=models.CASCADE, related_name='notifications')
    recipient_type = models.CharField(max_length=10, choices=Recipient.choices)
    message        = models.TextField()
    channel        = models.CharField(max_length=12, choices=Channel.choices, default=Channel.WEBSOCKET)
    is_read        = models.BooleanField(default=False)
    sent_at        = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-sent_at']
