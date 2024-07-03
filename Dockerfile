# Используем официальный образ PHP 8.3
FROM php:8.3-cli

# Устанавливаем необходимые зависимости для PHP
RUN apt-get update && apt-get install -y \
    libsqlite3-dev \
    libonig-dev \
    libxml2-dev \
    unzip \
    curl \
    git \
    && docker-php-ext-install pdo_sqlite mbstring

# Устанавливаем Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Устанавливаем Node.js и npm
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
RUN apt-get install -y nodejs

# Копируем приложение в Docker-образ
COPY . /var/www/html
WORKDIR /var/www/html

# Устанавливаем зависимости PHP
RUN composer install --no-dev --optimize-autoloader

# Устанавливаем зависимости Node.js и билдим фронтенд
RUN npm install
RUN npm run build

# Открываем порт для веб-сервера PHP
EXPOSE 8000

# Запускаем Laravel
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
