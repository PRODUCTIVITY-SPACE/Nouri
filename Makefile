.PHONY: help dev build stop logs migrate seed test lint

help:
	@echo "Nouri — available commands:"
	@echo "  make dev          Start dev environment (Docker)"
	@echo "  make build        Build all Docker images"
	@echo "  make stop         Stop all containers"
	@echo "  make migrate      Run Django migrations"
	@echo "  make seed         Load initial menu seed data"
	@echo "  make test         Run all tests (frontend + backend)"
	@echo "  make lint         Run linters (ESLint + flake8)"
	@echo "  make logs         Tail all container logs"

dev:
	docker-compose -f docker-compose.dev.yml up

build:
	docker-compose -f docker-compose.dev.yml build

stop:
	docker-compose -f docker-compose.dev.yml down

logs:
	docker-compose -f docker-compose.dev.yml logs -f

migrate:
	docker-compose -f docker-compose.dev.yml exec backend python manage.py migrate

seed:
	docker-compose -f docker-compose.dev.yml exec backend python manage.py loaddata seed/menu.json

test:
	docker-compose -f docker-compose.dev.yml exec backend python manage.py test
	cd frontend && npm run test

lint:
	cd frontend && npm run lint
	cd backend && flake8 .

shell-backend:
	docker-compose -f docker-compose.dev.yml exec backend python manage.py shell

shell-db:
	docker-compose -f docker-compose.dev.yml exec db psql -U nouri nouri_dev
