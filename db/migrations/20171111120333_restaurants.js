exports.up = knex => {
  return knex.schema.createTable('restaurants', table => {
    table.increments()
    table.string('name').notNullable().defaultTo('')
    table.string('street_address').notNullable().defaultTo('')
    table.string('city').notNullable().defaultTo('')
    table.string('state').notNullable().defaultTo('')
    table.integer('zip').notNullable().defaultTo(0)
    table.string('image', 280)
    table.string('neighborhood').notNullable().defaultTo('')
    table.string('cost').notNullable().defaultTo('')
    table.string('cuisine').notNullable().defaultTo('')
    table.string('website')
    table.text('description').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
};

exports.down = knex => {
  return knex.schema.dropTable('restaurants')
};
