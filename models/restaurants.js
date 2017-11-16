const knex = require('../db/db')

function getAllRest() {
  return knex('restaurants')
    .then(restaurants => {
      const result = restaurants.map(restaurant => {
        return knex('categories')
        .select('categories.name')
        .join('restaurant_category', 'categories.id', 'restaurant_category.category_id')
        .where('restaurant_category.restaurant_id', restaurant.id)
        .then(categories => {
          restaurant.categories = categories
          return restaurant
        })
      })
      return Promise.all(result)
    })
}

function getRest(id) {
  return knex('restaurants')
    .select('*')
    .where('restaurants.id', id)
    .then(restaurants => {
      const result = restaurants.map(restaurant => {
        return knex('categories')
        .select('categories.name')
        .join('restaurant_category', 'categories.id', 'restaurant_category.category_id')
        .where('restaurant_category.restaurant_id', restaurant.id)
        .then(categories => {
          const temp= []
          categories.forEach(cat => {
            temp.push(cat.name)
          })
          restaurant.categories = temp
          return restaurant
        })
      })
      return Promise.all(result)
    })
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
