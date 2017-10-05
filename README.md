# ginga-login authentication with Node

## Migrations

First, create two local Postgres databases:
```sh
$ psql
CREATE DATABASE ginga_login;
CREATE DATABASE ginga_login_test;
```

## Install and test

```sh
$ Install dependencies
npm install
$ Migrate
knex migrate:latest --env development
$ Seed
knex seed:run --env development
$ Test
npm test
```

## Run the development server

```sh
gulp
http://localhost:35729/
```

## Route Setup

Now we can configure our routes using a test-first approach:
```sh
/auth/register
/auth/login
/auth/logout
/auth/user
```