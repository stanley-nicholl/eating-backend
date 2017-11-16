exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('categories').insert([
        {id: 1, name: `chilliest`},
        {id: 2, name: `shabby chique`},
        {id: 3, name: `hidden gem`},
        {id: 4, name: `best of its class`},
        {id: 5, name: `bring yo' friends`},
        {id: 6, name: `baller brunch`},
        {id: 7, name: `great happy hour`},
        {id: 8, name: `24 hours`},
        {id: 9, name: `breaky`},
        {id:10, name: `great cocktails`},
        {id:11, name: `best plate`},
        {id:12, name: `bang for your buck`},
        {id:13, name: `fancy pants`}
      ]).then(() => {
        return knex.raw(`SELECT setval('categories_id_seq', (SELECT MAX(id) FROM categories));`)
      })
};
