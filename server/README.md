# Server - Backend Application

This directory contains the backend Node.js/Express application for the Expenses Tracker.

## Structure

- `/src` - Source code
  - `/controllers` - Route controllers
  - `/models` - Database models
  - `/routes` - API routes
  - `/middleware` - Express middleware
  - `/config` - Configuration files
  - `/utils` - Helper functions
  - `/validators` - Request validators

## Getting Started

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the server directory with:

```
PORT=5000
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```
