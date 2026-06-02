from django.db import models


class Restaurant(models.Model):
    class Currency(models.TextChoices):
        KES = 'KES', 'Kenyan Shilling'
        TZS = 'TZS', 'Tanzanian Shilling'
        UGX = 'UGX', 'Ugandan Shilling'
        USD = 'USD', 'US Dollar'

    name       = models.CharField(max_length=200)
    slug       = models.SlugField(unique=True)
    logo       = models.ImageField(upload_to='restaurants/', blank=True)
    address    = models.TextField(blank=True)
    phone      = models.CharField(max_length=20, blank=True)
    currency   = models.CharField(max_length=3, choices=Currency.choices, default=Currency.KES)
    tax_rate   = models.DecimalField(max_digits=5, decimal_places=2, default=16.00)  # VAT %
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Category(models.Model):
    restaurant    = models.ForeignKey(Restaurant, on_delete=models.CASCADE, related_name='categories')
    name          = models.CharField(max_length=100)
    slug          = models.SlugField()
    display_order = models.PositiveSmallIntegerField(default=0)
    is_visible    = models.BooleanField(default=True)

    class Meta:
        ordering = ['display_order']
        unique_together = [('restaurant', 'slug')]

    def __str__(self):
        return self.name


class MenuItem(models.Model):
    DIETARY_TAGS = [
        ('vegetarian', 'Vegetarian'),
        ('vegan', 'Vegan'),
        ('gluten-free', 'Gluten Free'),
        ('spicy', 'Spicy'),
        ('popular', 'Popular'),
    ]

    category      = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='items')
    name          = models.CharField(max_length=200)
    description   = models.TextField(blank=True)
    price         = models.DecimalField(max_digits=8, decimal_places=2)
    image         = models.ImageField(upload_to='menu/', blank=True)
    is_available  = models.BooleanField(default=True)
    dietary_tags  = models.JSONField(default=list, blank=True)
    display_order = models.PositiveSmallIntegerField(default=0)
    created_at    = models.DateTimeField(auto_now_add=True)
    updated_at    = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['display_order']

    def __str__(self):
        return f'{self.name} (${self.price})'
