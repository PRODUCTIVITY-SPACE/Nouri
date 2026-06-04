from django.db import models
from django.conf import settings


class Order(models.Model):
    class OrderType(models.TextChoices):
        DINE_IN  = 'dine-in',  'Dine In'
        TAKEAWAY = 'takeaway', 'Takeaway'
        DELIVERY = 'delivery', 'Delivery'

    class Status(models.TextChoices):
        PENDING    = 'pending',    'Pending'
        RECEIVED   = 'received',   'Received'
        PREPARING  = 'preparing',  'Preparing'
        READY      = 'ready',      'Ready'
        ON_THE_WAY = 'on-the-way', 'On the Way'
        SERVED     = 'served',     'Served'
        DELIVERED  = 'delivered',  'Delivered'
        CANCELLED  = 'cancelled',  'Cancelled'

    restaurant       = models.ForeignKey('menu.Restaurant', on_delete=models.PROTECT, related_name='orders')
    table            = models.ForeignKey('tables.Table', null=True, blank=True, on_delete=models.SET_NULL)
    order_type       = models.CharField(max_length=10, choices=OrderType.choices)
    delivery_address = models.TextField(blank=True)
    session_token    = models.CharField(max_length=64)
    status           = models.CharField(max_length=12, choices=Status.choices, default=Status.PENDING)
    total_amount     = models.DecimalField(max_digits=10, decimal_places=2)
    payment_status   = models.CharField(max_length=20, default='unpaid')
    payment_method   = models.CharField(
        max_length=20,
        choices=[
            ('mpesa',   'M-Pesa'),
            ('airtel',  'Airtel Money'),
            ('card',    'Card (Stripe)'),
            ('pesapal', 'Pesapal'),
            ('cash',    'Cash'),
        ],
        blank=True
    )
    payment_ref      = models.CharField(max_length=100, blank=True)
    notes            = models.TextField(blank=True)
    created_at       = models.DateTimeField(auto_now_add=True)
    updated_at       = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'Order #{self.pk} — {self.order_type} ({self.status})'


class OrderItem(models.Model):
    order      = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
    menu_item  = models.ForeignKey('menu.MenuItem', null=True, on_delete=models.SET_NULL)
    item_name  = models.CharField(max_length=200)   # snapshot at order time
    item_price = models.DecimalField(max_digits=8, decimal_places=2)
    quantity   = models.PositiveSmallIntegerField(default=1)
    notes      = models.TextField(blank=True)

    def __str__(self):
        return f'{self.quantity}x {self.item_name}'

    @property
    def subtotal(self):
        return self.item_price * self.quantity


class OrderStatusHistory(models.Model):
    order      = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='status_history')
    status     = models.CharField(max_length=12, choices=Order.Status.choices)
    changed_by = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.SET_NULL)
    note       = models.TextField(blank=True)
    changed_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['changed_at']
