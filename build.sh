#!/usr/bin/env bash
# Exit on any error
set -e

echo "Starting Webyotic Deployment Build for Render..."

# 1. Install Composer dependencies (production optimized)
composer install --no-interaction --prefer-dist --optimize-autoloader --no-dev

# 2. Setup SQLite Database if not present
mkdir -p database
touch database/database.sqlite

# 3. Install NPM dependencies & build React / Tailwind assets
npm install --no-audit
npm run build

# 4. Cache Laravel configuration, routes & views for maximum performance
php artisan config:cache
php artisan route:cache
php artisan view:cache

# 5. Run Database Migrations
php artisan migrate --force

echo "Webyotic Build Complete and Ready to Serve!"
