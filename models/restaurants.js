const knex = require('../db/db')

function getAllRest() {
  return knex('restaurants')
}

function getRest(id) {
  return knex('restaurants')
    .where('restaurants.id', id)
}

function createRest(body) {
  return knex('restaurants')
    .insert(body)
    .returning('*')
}

function updateRest(id, body) {
  return knex('restaurants')
    .where('restaurants.id', id)
    .update(body)
    .returning('*')
}

function destroyRest(id) {
  return knex('restaurants')
    .where('restaurants.id', id)
    .del()
}

module.exports = { getAllRest, getRest, createRest, updateRest, destroyRest }
