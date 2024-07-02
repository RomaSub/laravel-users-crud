# Используем базовый образ PHP с Node.js
FROM php:8.2-cli

# Установка необходимых системных библиотек и инструментов
RUN apt-get update && apt-get install -y \
    libpq-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    nodejs \
    npm \
    && docker-php-ext-install pdo pdo_pgsql zip

# Установка Composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php composer-setup.php --install-dir=/usr/local/bin --filename=composer \
    && php -r "unlink('composer-setup.php');"

# Установка Node.js
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs


# Установка рабочей директории
WORKDIR /app

# Копирование зависимостей и установка
COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader

COPY package.json package-lock.json ./
RUN npm install
RUN npm run build

# Копирование исходного кода
COPY . .

# Выполнение миграций и запуск приложения
CMD ["bash", "-c", "php artisan migrate --force && php artisan serve --host=0.0.0.0 --port=$PORT"]
