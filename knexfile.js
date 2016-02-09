module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'third_party_damage'
    },
    pool: {
      min: 1,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  test: {
    client: 'postgresql',
    connection: {
      database: 'third_party_damage_test'
    },
    pool: {
      min: 1,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};