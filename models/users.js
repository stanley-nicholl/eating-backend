const knex = require('../db/db')

function getAllUser() {
  return knex('users')
}

function getUser(id) {
  return knex('users')
    .where('users.id', id)
}

function createUser(body) {
  return knex('users')
    .insert(body)
    .returning('*')
}

function updateUser(id, body) {
  return knex('users')
    .where('users.id', id)
    .update(body)
    .returning('*')
}

function destroyUser(id) {
  return knex('users')
    .where('users.id', id)
    .del()
}

module.exports = { getAllUser, getUser, createUser, updateUser, destroyUser }
