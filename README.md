# FarmLokal Backend – Scalable & High Performance API

## Overview
Production-ready backend simulating FarmLokal real-world challenges:
OAuth authentication, Redis caching, high-performance APIs, and reliability patterns.

## Tech Stack
Node.js, Express, PostgreSQL, Redis, Docker

## Features
- OAuth-based authentication
- High-performance product listing APIs
- Redis cache-aside strategy
- External API integration with circuit breaker
- Rate limiting

## Run Locally
```bash
cp .env.example .env
docker-compose up --build
```
