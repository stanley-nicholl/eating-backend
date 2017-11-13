exports.up = knex => {
  return knex.schema.createTable('categories', table => {
    table.increments()
    table.string('name').notNullable().defaultTo('')
  })
};

exports.down = knex => {
  return knex.schema.dropTable('categories')
};
