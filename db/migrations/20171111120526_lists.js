exports.up = knex => {
  return knex.schema.createTable('lists', table => {
    table.increments()
    table.integer('user_id').notNullable().defaultTo(0)
    table.integer('restaurant_id').notNullable().defaultTo(0)
    table.boolean('completed').notNullable().defaultTo(0)
    table.date('date_completed')
    table.boolean('recommend')
    table.string('comment', 280)
    table.timestamps(true, true)
  })
};

exports.down = knex => {
  return knex.schema.dropTable('lists')
};
