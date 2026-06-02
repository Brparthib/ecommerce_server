<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS Logo" />
  </a>
</p>

<p align="center">
  <strong>Enterprise E-Commerce Backend</strong><br />
  Modular Monolith Architecture • NestJS • PostgreSQL • Prisma • Redis
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank">
    <img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank">
    <img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" />
  </a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank">
    <img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" />
  </a>
</p>

---

## 📦 Overview

A production-ready, enterprise-grade e-commerce backend system built with **NestJS**, **PostgreSQL**, **Prisma ORM**, **Redis**, and **Docker**. The system follows a **Modular Monolith** architecture and includes RBAC, multi-vendor readiness, inventory management, order processing, payment gateway integration, and much more.

---

## 🚀 Key Features

- ✅ Multi Vendor Ready
- ✅ Inventory & Warehouse Management
- ✅ Product Management with Variants & SEO
- ✅ Customer Management
- ✅ Shopping Cart (Guest & Persistent)
- ✅ Order & Payment Processing
- ✅ Shipping Zones & Methods
- ✅ Coupons (Percentage & Fixed Discount)
- ✅ Product Reviews & Ratings
- ✅ Wishlist
- ✅ Notifications (Email, SMS, Push)
- ✅ Analytics Ready

---

## 🛠️ Technology Stack

| Category       | Technology                                      |
| -------------- | ----------------------------------------------- |
| **Backend**    | NestJS, TypeScript                              |
| **Database**   | PostgreSQL                                      |
| **ORM**        | Prisma                                          |
| **Cache**      | Redis                                           |
| **Auth**       | JWT (Access + Refresh Token), RBAC              |
| **File Store** | Local (Dev) / AWS S3 (Prod)                     |
| **Deployment** | Docker, Docker Compose                          |

---

## 🧱 Architecture

```txt
src/
├── modules/           # Feature modules (auth, users, products, orders, etc.)
├── common/            # Shared utilities, guards, interceptors, pipes
├── config/            # Configuration modules
├── prisma/            # Prisma client & migrations
├── shared/            # DTOs, interfaces, constants
├── jobs/              # Background jobs / cron
├── events/            # Event-driven handlers
└── main.ts            # Application entry point