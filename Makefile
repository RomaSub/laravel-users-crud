install:
	composer install
	npm install

run:
	php artisan serve &
	npm run dev

test:
	php artisan test

lint-js:
	npx eslint .

fix-lint-js:
	npx eslint --fix .

analyse:
	composer exec phpstan analyse -v -- --memory-limit=512M

lint-php:
	composer exec phpcs -v

fix-lint-php:
	composer exec phpcbf -v
