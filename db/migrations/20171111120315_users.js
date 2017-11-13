exports.up = knex => {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('email').notNullable().defaultTo('')
    table.string('first_name').notNullable().defaultTo('')
    table.string('last_name').notNullable().defaultTo('')
    table.integer('score').notNullable().defaultTo(0)
    table.boolean('foodie').notNullable().defaultTo(false)
    table.timestamps(true, true)
  })
};

exports.down = knex => {
  return knex.schema.dropTable('users')
};
