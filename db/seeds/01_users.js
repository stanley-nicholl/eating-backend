exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('users').insert([
        {id: 1, email: 'snicholl@gmail.com', first_name: 'Stanley', last_name: 'Nicholl', score: 0, foodie: true},
        {id: 2, email: 'annabrayton@gmail.com', first_name: 'Anna', last_name: 'Brayton', score: 0, foodie: false},
        {id: 3, email: 'enicholl@gmail.com', first_name: 'Elise', last_name: 'Nicholl', score: 0, foodie: false}
      ]).then(() => {
        return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`)
      })
};
