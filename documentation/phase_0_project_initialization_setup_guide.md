# Phase 0: Project Initialization & Setup Guide

## Enterprise E-commerce Backend

Technology Stack:

* NestJS
* PostgreSQL
* Prisma ORM
* Redis
* JWT Authentication
* Docker
* PNPM
* TypeScript

Architecture:

```txt
Modular Monolith
```

---

# Prerequisites

Install the following software before starting.

## Node.js

Recommended:

```txt
Node.js LTS (Latest)
```

Check:

```bash
node -v
```

---

## PNPM

Install globally:

```bash
npm install -g pnpm
```

Verify:

```bash
pnpm -v
```

---

## Docker Desktop

Install Docker Desktop.

Verify:

```bash
docker -v
```

```bash
docker compose version
```

---

## PostgreSQL

Install PostgreSQL locally or use Docker.

Verify:

```bash
psql --version
```

---

## Git

Verify:

```bash
git --version
```

---

# Step 1: Create NestJS Project

Install Nest CLI:

```bash
pnpm add -g @nestjs/cli
```

Verify:

```bash
nest --version
```

Create project:

```bash
nest new ecommerce-backend
```

Choose:

```txt
Package Manager: pnpm
```

Move into project:

```bash
cd ecommerce-backend
```

Run project:

```bash
pnpm start:dev
```

Verify:

```txt
http://localhost:3000
```

---

# Step 2: Initialize Git

Initialize:

```bash
git init
```

Create repository:

```txt
ecommerce-backend
```

Create first commit:

```bash
git add .
git commit -m "Initial NestJS setup"
```

---

# Step 3: Create Project Structure

Inside src:

```txt
src

├── common
├── config
├── prisma
├── shared
├── modules
└── main.ts
```

Create folders:

```bash
mkdir src/common
mkdir src/config
mkdir src/prisma
mkdir src/shared
mkdir src/modules
```

---

# Step 4: Install Prisma

Install packages:

```bash
pnpm add @prisma/client
```

```bash
pnpm add -D prisma
```

Initialize Prisma:

```bash
pnpm prisma init
```

Generated:

```txt
prisma/
.env
```

---

# Step 5: Configure PostgreSQL

Create database:

```sql
CREATE DATABASE ecommerce_db;
```

Update .env

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/ecommerce_db?schema=public"
```

---

# Step 6: Generate Prisma Client

Run:

```bash
pnpm prisma generate
```

---

# Step 7: Create Initial Prisma Schema

Open:

```txt
prisma/schema.prisma
```

Example:

```prisma
generator client {
 provider = "prisma-client-js"
}

datasource db {
 provider = "postgresql"
 url      = env("DATABASE_URL")
}
```

---

# Step 8: First Migration

Create migration:

```bash
pnpm prisma migrate dev --name init
```

Verify:

```bash
pnpm prisma studio
```

---

# Step 9: Create Prisma Module

Generate:

```bash
nest g module prisma
```

Create:

```txt
src/prisma/prisma.service.ts
```

```txt
src/prisma/prisma.module.ts
```

Purpose:

```txt
Single Prisma connection across application
```

---

# Step 10: Install Config Module

Install:

```bash
pnpm add @nestjs/config
```

Configure:

```ts
ConfigModule.forRoot({
  isGlobal: true,
});
```

---

# Step 11: Install Validation Packages

Install:

```bash
pnpm add class-validator class-transformer
```

Global validation pipe:

```ts
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true,
  }),
);
```

---

# Step 12: Install Environment Validation

Install:

```bash
pnpm add joi
```

Purpose:

```txt
Validate env variables at startup
```

---

# Step 13: Install Authentication Packages

Install:

```bash
pnpm add @nestjs/jwt
```

```bash
pnpm add @nestjs/passport
```

```bash
pnpm add passport
```

```bash
pnpm add passport-jwt
```

```bash
pnpm add bcrypt
```

Install types:

```bash
pnpm add -D @types/bcrypt
```

```bash
pnpm add -D @types/passport-jwt
```

---

# Step 14: Install Swagger

Install:

```bash
pnpm add @nestjs/swagger
```

```bash
pnpm add swagger-ui-express
```

Swagger URL:

```txt
http://localhost:3000/api/docs
```

---

# Step 15: Install Redis

Install:

```bash
pnpm add ioredis
```

Purpose:

* Cache
* OTP
* Session
* Queue

---

# Step 16: Install File Upload Packages

Install:

```bash
pnpm add @nestjs/platform-express
```

```bash
pnpm add multer
```

Types:

```bash
pnpm add -D @types/multer
```

---

# Step 17: Install Security Packages

Install:

```bash
pnpm add helmet
```

```bash
pnpm add compression
```

```bash
pnpm add cookie-parser
```

Types:

```bash
pnpm add -D @types/cookie-parser
```

Purpose:

* Security Headers
* Compression
* Cookies

---

# Step 18: Install Rate Limiting

Install:

```bash
pnpm add @nestjs/throttler
```

Purpose:

```txt
Prevent brute force attacks
```

---

# Step 19: Install Logging

Install:

```bash
pnpm add nestjs-pino pino pino-pretty
```

Purpose:

```txt
Enterprise logging
```

---

# Step 20: Install Mail Module

Install:

```bash
pnpm add @nestjs-modules/mailer
```

```bash
pnpm add nodemailer
```

Purpose:

* Verification email
* Password reset
* Order email

---

# Step 21: Configure Docker

Create:

```txt
docker-compose.yml
```

Services:

```txt
postgres
redis
```

Example:

```yaml
version: '3.9'

services:

  postgres:
    image: postgres:17
    restart: always

    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: ecommerce_db

    ports:
      - "5432:5432"

  redis:
    image: redis:7

    ports:
      - "6379:6379"
```

Start:

```bash
docker compose up -d
```

Verify:

```bash
docker ps
```

---

# Step 22: Configure Main.ts

Enable:

* Validation
* Swagger
* Helmet
* Compression
* Cookie Parser

Application startup order:

```txt
NestFactory
   ↓
Config
   ↓
Security
   ↓
Validation
   ↓
Swagger
   ↓
Application Listen
```

---

# Step 23: Create Base Modules

Generate:

```bash
nest g module modules/auth
nest g module modules/users
nest g module modules/roles
nest g module modules/permissions
```

```bash
nest g module modules/categories
nest g module modules/brands
nest g module modules/products
```

```bash
nest g module modules/inventory
nest g module modules/warehouses
```

```bash
nest g module modules/customers
nest g module modules/addresses
```

```bash
nest g module modules/cart
nest g module modules/wishlist
```

```bash
nest g module modules/orders
nest g module modules/payments
```

```bash
nest g module modules/reviews
nest g module modules/coupons
```

```bash
nest g module modules/notifications
```

---

# Step 24: Setup Common Folder

Create:

```txt
common

decorators
guards
filters
interceptors
pipes
constants
exceptions
utils
```

Purpose:

```txt
Reusable application-wide code
```

---

# Step 25: Setup Shared Folder

Create:

```txt
shared

dto
interfaces
types
enums
```

Purpose:

```txt
Shared resources across modules
```

---

# Step 26: Commit Setup

```bash
git add .
```

```bash
git commit -m "Phase 0 project initialization completed"
```

---

# Phase 0 Completed

At the end of Phase 0 you should have:

✓ NestJS Application

✓ PostgreSQL

✓ Prisma

✓ Redis

✓ Docker

✓ Swagger

✓ JWT Packages

✓ Validation

✓ Security

✓ Logging

✓ Mail Support

✓ Modular Folder Structure

✓ Base Modules Created

Ready for:

```txt
Phase 1
Authentication & Authorization
```
