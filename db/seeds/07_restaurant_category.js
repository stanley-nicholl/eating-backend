exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('restaurant_category').insert([
        {id: 1, restaurant_id: 1, category_id: 1},
        {id: 2, restaurant_id: 1, category_id: 2},
        {id: 3, restaurant_id: 1, category_id: 5},
        {id: 4, restaurant_id: 2, category_id: 4},
        {id: 5, restaurant_id: 2, category_id: 3},
        {id: 6, restaurant_id: 3, category_id: 8},
        {id: 7, restaurant_id: 3, category_id: 1},
        {id: 8, restaurant_id: 3, category_id: 2},
        {id: 9, restaurant_id: 3, category_id: 5},
        {id: 10, restaurant_id: 4, category_id: 3},
        {id: 11, restaurant_id: 4, category_id: 3}
      ]).then(() => {
        return knex.raw(`SELECT setval('restaurant_category_id_seq', (SELECT MAX(id) FROM restaurant_category));`)
      })
};
