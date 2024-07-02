# Stage 1: Сборка фронтенда
FROM node:22 AS frontend

WORKDIR /app

# Копируем и устанавливаем только package.json и package-lock.json для лучшего использования кэша
COPY package*.json ./
RUN npm ci

# Копируем весь проект и собираем
COPY . .
RUN npm run build

# Stage 2: Сборка бэкенда
FROM php:8.3-fpm

RUN apt-get update && apt-get install -y \
    libpng-dev \
    zip \
    unzip \
    git \
    libsqlite3-dev \
    sqlite3 \
    && docker-php-ext-install pdo_mysql pdo_sqlite

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Установка Node.js для npm
COPY --from=node:22 /usr/local/bin/node /usr/local/bin/node
COPY --from=node:22 /usr/local/lib/node_modules /usr/local/lib/node_modules
RUN ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm

WORKDIR /var/www/html

COPY composer.json composer.lock ./
RUN composer install --prefer-dist --no-dev --optimize-autoloader

COPY . .

# Копируем результаты сборки фронтенда
COPY --from=frontend /app/public/build /var/www/html/public

RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Генерация ключа
COPY .env.example .env
RUN php artisan key:generate

CMD ["bash", "-c", "php artisan migrate:refresh --seed --force && php artisan serve --host=0.0.0.0 --port=8000"]
