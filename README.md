# ginga-login authentication with Node

# migrations

First, create two local Postgres databases:
$ psql
CREATE DATABASE ginga_login;
CREATE DATABASE ginga_login_test

## install

Install dependencies - `npm install`
Migrate - `knex migrate:latest --env development`
Seed - `knex seed:run --env development`
Run the development server - `gulp`
Test - `npm test`