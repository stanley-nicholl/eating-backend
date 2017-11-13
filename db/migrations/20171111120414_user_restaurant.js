exports.up = knex => {
  return knex.schema.createTable('user_restaurant', table => {
    table.increments()
    table.integer('user_id').notNullable().defaultTo(0)
    table.integer('restaurant_id').notNullable().defaultTo(0)
    table.integer('foodie_rating')
    table.integer('user_rating')
    table.text('comment')
    table.timestamps(true, true)
  })
};

exports.down = knex => {
  return knex.schema.dropTable('user_restaurant')
};
