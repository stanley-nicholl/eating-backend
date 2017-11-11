// Update with your config settings.

const path = require('path')

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/good_food',
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'dib', 'seeds')
    }
  }

};


// heroku addons:create heroku-postgresql:hobby-dev
