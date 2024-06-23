setup: install generate-key migrate

install:
	composer install
	npm install

generate-key:
	cp .env.example .env
	php artisan key:generate

migrate:
	php artisan migrate

start:
	php artisan serve &
	npm run dev

test:
	php artisan test

lint: lint-js lint-php

lint-js:
	-npx eslint .

lint-php:
	-composer exec phpcs -v

analyse:
	composer exec phpstan analyse -v -- --memory-limit=512M

fix-lint-js:
	npx eslint --fix .

fix-lint-php:
	composer exec phpcbf -v
