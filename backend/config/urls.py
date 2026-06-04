from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('django-admin/', admin.site.urls),

    # Auth
    path('api/auth/login/',   TokenObtainPairView.as_view(),  name='token_obtain_pair'),
    path('api/auth/refresh/', TokenRefreshView.as_view(),     name='token_refresh'),

    # Public (customer-facing)
    path('api/menu/',   include('apps.menu.urls')),
    path('api/orders/', include('apps.orders.urls')),
    path('api/tables/', include('apps.tables.urls')),

    # Admin (protected)
    path('api/admin/', include([
        path('menu/',    include('apps.menu.admin_urls')),
        path('orders/',  include('apps.orders.admin_urls')),
        path('tables/',  include('apps.tables.admin_urls')),
        path('reports/', include('apps.orders.report_urls')),
    ])),
]
