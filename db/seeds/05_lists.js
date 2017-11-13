exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('lists').insert([
        {id: 1, user_id: 1, restaurant_id: 1, completed: true, date_completed: '2017/10/31 00:00:00', recommend: true, comment: `Had the El Capitan Omelette. Delicious!`},
        {id: 2, user_id: 1, restaurant_id: 2, completed: true, date_completed: '2017/08/15 00:00:00', recommend: true, comment: `Had the sausage pizza and whipped salt cod.`},
        {id: 3, user_id: 2, restaurant_id: 1, completed: true, date_completed: '2017/10/13 00:00:00', recommend: true, comment: `Had the El Capitan Omelette. Delicious!`},
        {id: 4, user_id: 2, restaurant_id: 2, completed: false},
        {id: 5, user_id: 3, restaurant_id: 1, completed: false},
        {id: 6, user_id: 3, restaurant_id: 2, completed: true, date_completed: '2017/10/20 00:00:00', recommend: true, comment: `Had the meatballs and margherita pizza.`}
      ]).then(() => {
        return knex.raw(`SELECT setval('lists_id_seq', (SELECT MAX(id) FROM lists));`)
      })
};
