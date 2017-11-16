const knex = require('../db/db')

function getAllUser() {
  return knex('users')
}

function getUser(email) {
  return knex('users')
    .where('users.email', email)
}

function createUser(body) {
  return knex('users')
    .insert(body)
    .returning('*')
}

function updateUser(email, body) {
  console.log(email);
  console.log(body);
  return knex('users')
    .where('users.email', email)
    .update(body)
    .returning('*')
}

function destroyUser(email) {
  return knex('users')
    .where('users.email', email)
    .del()
}

module.exports = { getAllUser, getUser, createUser, updateUser, destroyUser }
