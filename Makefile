compose-setup: compose-build compose-install

setup:
	composer install
	cp -n .env.example .env
	php artisan key:generate
	touch database/database.sqlite
	php artisan migrate
	php artisan storage:link
	npm ci
	npm run prepare
	npm run build

compose-build:
	docker-compose build

compose-install:
	docker-compose run app make setup

compose-lint:
	docker-compose run app make lint

compose-test:
	docker-compose run app make test

compose:
	docker-compose up --abort-on-container-exit

ansible: ansible-setup ansible-release

ansible-setup:
	ansible-playbook -i ansible/inventory/inventory.yml ansible/playbooks/setup.yml

ansible-release:
	ansible-playbook -i ansible/inventory/inventory.yml ansible/playbooks/release.yml --extra-vars "version=latest"

migrate:
	php artisan migrate

sentry:
	php artisan sentry:test

seed:
	php artisan db:seed

start:
	php artisan serve &
	npm run dev

test:
	php artisan test

lint: lint-js lint-php

fix: prettier fix-lint-js fix-lint-php

lint-js:
	-npx eslint .

lint-php:
	-composer exec phpcs -v

prettier:
	-npx prettier --write .

analyse:
	composer exec phpstan analyse -v -- --memory-limit=512M

fix-lint-js:
	-npx eslint --fix .

fix-lint-php:
	-composer exec phpcbf -v
