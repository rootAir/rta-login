# ginga-login authentication with Node

## Migrations

First, create two local Postgres databases:
```sh
$ psql
CREATE DATABASE ginga_login;
CREATE DATABASE ginga_login_test;
```

## Install

```sh
$ Install dependencies
npm install
$ Migrate
knex migrate:latest --env development
$ Seed
knex seed:run --env development
```

## Test and run the development server

```sh
npm test
gulp
```

## Route Setup

Now we can configure our routes using a test-first approach:
```sh
$ register
curl -X POST -d "username=admin&password=admin" http://localhost:3000/auth/register

$ login
curl -X POST -d "username=admin&password=admin" http://localhost:3000/auth/login

$ user
curl -X GET -H "Authorization: jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDg0MzQ5MzEsImlhdCI6MTUwNzIyODkzMSwic3ViIjoyfQ.ePbnNS8jIvBXqv97gyUh_9llVy3br9dH7ft4xDoq7OA" http://localhost:3000/auth/user
```