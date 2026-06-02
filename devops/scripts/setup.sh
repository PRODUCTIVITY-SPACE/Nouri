#!/bin/bash
set -e
echo "Setting up Nouri development environment..."

cp -n frontend/.env.example frontend/.env.local || true
cp -n backend/.env.example  backend/.env        || true

docker-compose -f docker-compose.dev.yml up -d db redis
sleep 3

docker-compose -f docker-compose.dev.yml run --rm backend \
  python manage.py migrate

docker-compose -f docker-compose.dev.yml run --rm backend \
  python manage.py createsuperuser --noinput \
  --email admin@nouri.app || true

echo "Setup complete. Run: make dev"
