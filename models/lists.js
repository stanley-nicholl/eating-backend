const knex = require('../db/db')

function getAllLists() {
  return knex('lists')
}

function getList(id) {
  return knex('lists').select('*', 'lists.id AS list_id')
    .join('restaurants', 'restaurants.id', 'lists.restaurant_id')
    .where('lists.user_id', id)
}

function createList(body) {
  return knex('lists')
   .insert(body)
   .returning('*')
}

function updateList(id, body) {
  return knex('lists')
    .where('lists.id', id)
    .update(body)
    .returning('*')
}

function destroyList(id) {
  return knex('lists')
    .where('lists.id', id)
    .del()
    .returning('*')
}

module.exports = { getAllLists, getList, createList, updateList, destroyList }
