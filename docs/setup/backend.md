# Backend Setup Guide

## Prerequisites
- Python 3.12+
- PostgreSQL 16
- Redis 7
- Docker (recommended)

## Local Setup (without Docker)

```bash
cd backend
python -m venv venv
source venv/bin/activate          # Windows: venv\Scripts\activate
pip install -r requirements/development.txt

cp .env.example .env
# Edit .env with your local DB credentials

python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

## With Docker

```bash
make dev
make migrate
```

## Environment Variables
See `backend/.env.example` for all required variables.

## Running Tests
```bash
python manage.py test
```

## API Docs
Visit `http://localhost:8000/api/schema/` (Phase 2 — drf-spectacular)
