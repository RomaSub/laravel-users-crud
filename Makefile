install:
	composer install
	npm install

run:
	php artisan serve &
	npm run dev

test:
	php artisan test
