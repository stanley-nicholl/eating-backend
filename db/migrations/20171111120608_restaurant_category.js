exports.up = knex => {
  return knex.schema.createTable('restaurant_category', table => {
    table.increments()
    table.integer('restaurant_id').notNullable().defaultTo(0)
    table.integer('category_id').notNullable().defaultTo(0)
    table.timestamps(true, true)
  })
};

exports.down = knex => {
  return knex.schema.dropTable('restaurant_category')
};
