exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('user_restaurant').insert([
        {id: 1, user_id: 1, restaurant_id: 1, foodie_rating: 4, comment: `Great service the bar style food is done perfectly. Top three 24 hour spot in Seattle.`},
        {id: 2, user_id: 2, restaurant_id: 1, user_rating: 5, comment: `Had a good time with a work crew on the "dark side" of the restaurant. Will definitely go back.`},
        {id: 3, user_id: 1, restaurant_id: 2, foodie_rating: 4, comment: `Best authentic traditional Naplese pizza in the city. Great drinks and the appetizers are on par. Only downfall, won't let you call ahead for a takeout order, else would get a 5.`},
        {id: 4, user_id: 3, restaurant_id: 1, user_rating: 5, comment: `Love this place!`},
      ]).then(() => {
        return knex.raw(`SELECT setval('user_restaurant_id_seq', (SELECT MAX(id) FROM user_restaurant));`)
      })
};
