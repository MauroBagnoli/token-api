include .env
export

postgres:
	docker run --name postgres12 -p 5432:5432 -e POSTGRES_USER=${DB_USER} -e POSTGRES_PASSWORD=${DB_PASS} -d postgres:12-alpine

createdb:
	@echo "Creating database if it does not exist..."
	@docker exec -it postgres12 psql -U ${DB_USER} -tAc "SELECT 1 FROM pg_database WHERE datname = '${DB_NAME}'" | grep -q 1 || docker exec -it postgres12 psql -U ${DB_USER} -c "CREATE DATABASE ${DB_NAME}"

migrateup:
	npm run migrate

migratedown:
	npm run migratedown

stop:
	docker stop postgres12

server:
	npm run start:dev

debugdb:
	docker exec -it postgres12 bash

dbshell:
  docker exec -it postgres12 psql -U root token_app_db

deletepgimage:
	docker rm postgres12

test:
	npm run test

.PHONY: postgres createdb server debugdb test migratedown migrateup dbshell deletepgimage
