# Multi-stage Dockerfile for Laravel + React + Tailwind CSS on Render

# --- Stage 1: Build Frontend Assets with Node ---
FROM node:22-alpine AS frontend
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- Stage 2: PHP Application Container ---
FROM php:8.4-cli-alpine

# Install system dependencies & PHP extensions
RUN apk add --no-cache \
    git \
    curl \
    libpng-dev \
    libxml2-dev \
    zip \
    unzip \
    sqlite \
    sqlite-dev \
    oniguruma-dev

RUN docker-php-ext-install pdo pdo_sqlite mbstring bcmath opcache

# Get Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Copy application files
COPY . .
COPY --from=frontend /app/public/build ./public/build

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Prepare environment & permissions
RUN cp .env.example .env && \
    touch database/database.sqlite && \
    chown -R www-data:www-data storage bootstrap/cache database && \
    chmod -R 775 storage bootstrap/cache database

# Generate App Key & run production optimization
RUN php artisan key:generate --force && \
    php artisan config:cache && \
    php artisan route:cache && \
    php artisan view:cache

# Render assigns dynamic PORT environment variable (default 10000)
ENV PORT=10000
EXPOSE ${PORT}

# Start PHP built-in server with production settings
CMD php artisan migrate --force && php artisan serve --host=0.0.0.0 --port=${PORT}
