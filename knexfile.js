const databaseName = 'ginga_login';

module.exports = {
  development: {
    client: 'postgresql',
    connection: `postgres://localhost:5432/${databaseName}`,
    migrations: {
      directory: __dirname + '/src/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/db/seeds'
    }
  },
  test: {
    client: 'postgresql',
    connection: `postgres://localhost:5432/${databaseName}_test`,
    migrations: {
      directory: __dirname + '/src/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/db/seeds'
    }
  },
  production: {
    client: 'postgresql',
    connection: `postgres://gmgpsgvtyhxnag:f27e4e0d34e7346384e2c74bea916aa3892591e1af1f71c273ae90244f3575e4@ec2-23-21-92-251.compute-1.amazonaws.com:5432/daf54nv8dse3j9`,
    migrations: {
      directory: __dirname + '/src/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/db/seeds'
    }
  }
};
