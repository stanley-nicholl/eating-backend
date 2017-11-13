exports.up = knex => {
  return knex.schema.createTable('plates', table => {
    table.increments()
    table.string('name').notNullable().defaultTo('')
    table.integer('restaurant_id').notNullable().defaultTo(0)
    table.string('description')
    table.integer('up_votes')
    table.timestamps(true, true)
  })
};

exports.down = knex => {
  return knex.schema.dropTable('plates')
};
