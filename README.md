# ginga-login authentication with Node

## Migrations

First, create two local Postgres databases:
```sh
$ psql
$ CREATE DATABASE ginga_login;
$ CREATE DATABASE ginga_login_test;
```

## Install

```sh
$ Install dependencies - `npm install`
$ Migrate - `knex migrate:latest --env development`
$ Seed - `knex seed:run --env development`
$ Test - `npm test`
$ Run the development server - `gulp`
```