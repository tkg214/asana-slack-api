require('dotenv').config();

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl=true',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }

};
