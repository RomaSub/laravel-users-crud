# Stage 1: Сборка фронтенда
FROM node:22 AS frontend

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем все файлы проекта
COPY . .

# Запускаем сборку фронтенда
RUN npm run build

# Stage 2: Сборка бэкенда
FROM php:8.3-fpm

# Устанавливаем зависимости для PHP
RUN apt-get update && apt-get install -y \
    libpng-dev \
    zip \
    unzip \
    git \
    libsqlite3-dev \
    sqlite3 \
    && docker-php-ext-install pdo_mysql pdo_sqlite

# Устанавливаем Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Устанавливаем Node.js для npm
COPY --from=node:22 /usr/local/bin/node /usr/local/bin/node
COPY --from=node:22 /usr/local/lib/node_modules /usr/local/lib/node_modules
RUN ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm

# Устанавливаем рабочую директорию для Laravel-приложения
WORKDIR /var/www/html

# Копируем файлы Composer
COPY composer.json composer.lock ./

# Устанавливаем PHP-зависимости и устанавливаем Composer зависимости
RUN composer install --prefer-dist --no-scripts --no-dev --no-autoloader

# Копируем весь исходный код проекта
COPY . .

# Копируем файл .env.example и переименовываем в .env
COPY .env.example .env

# Генерируем ключ Laravel
RUN php artisan key:generate

# Устанавливаем права на директории storage и bootstrap/cache
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Запускаем Laravel-приложение через php-fpm
CMD ["php-fpm"]
