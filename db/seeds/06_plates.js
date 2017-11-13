exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('plates').insert([
        {id: 1, name: `El Capitan Omelette`, restaurant_id: 1, description: ``, up_votes: 5},
        {id: 2, name: `Eggs Benedict`, restaurant_id: 1, description: `Classic with canadian bacon, poached eggs, and hollandaise`, up_votes: 2},
        {id: 3, name: `Funghi Pizza`, restaurant_id: 2, description: `Crimini mushrooms, housemade sausage, cherry tomatoes, pecorino, & fontina`, up_votes: 4},
        {id: 4, name: `Polpettine`, restaurant_id: 2, description: `house-made meatballs in tomator sauce`, up_votes: 3},
        {id: 5, name: `Grilled Octopus`, restaurant_id: 2, description: `with corona beans, locinato kale, spicy 'Nduja salame & extra virgin olice oil`, up_votes: 1},
        {id: 6, name: `Mom's Meatloaf`, restaurant_id: 1, description: `the way Mom used to make it! Local groud beef, bacon, onions, & our secret seasonings. Glazed with ketchup, served with mashed potatoes`, up_votes: 14},
      ]).then(() => {
        return knex.raw(`SELECT setval('plates_id_seq', (SELECT MAX(id) FROM plates));`)
      })
};
