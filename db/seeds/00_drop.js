
exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('restaurant_category').del()
    .then(() => knex('plates').del())
    .then(() => knex('lists').del())
    .then(() => knex('user_restaurant').del())
    .then(() => knex('categories').del())
    .then(() => knex('restaurants').del())
    .then(() => knex('users').del())
};
