const { restModel } = require('../models')
const cleanseFields = ['name', 'street_address', 'city', 'state', 'zip', 'image', 'cost', 'cuisine', 'website', 'description']
const completeFields = ['name', 'street_address', 'city', 'state', 'zip', 'cost', 'cuisine', 'description']

// ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES
// ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES

function getAllRest(req, res, next) {
  restModel.getAllRest().then(restaurants => {
    res.status(200).json({ restaurants })
  })
}

function getRest(req, res, next) {
  restModel.getRest(req.params.id).then(restaurant => {
    res.status(200).json({ restaurant })
  })
}

function createRest(req, res, next) {
  restModel.createRest(req.body).then(restaurant => {
    res.status(201).json({ restaurant })
  })
}

function updateRest(req, res, next) {
  restModel.updateRest(req.params.id, req.body).then(restaurant => {
    res.status(200).json({ restaurant })
  })
}

function destroyRest(req, res, next) {
  restModel.destroyRest(req.params.id).then(restaurant => {
    res.status(200).json({ message: `Restaurant deleted`})
  })
}

// VALIDATIONS VALIDATIONS VALIDATIONS VALIDATIONS VALIDATIONS VALIDATIONS
// VALIDATIONS VALIDATIONS VALIDATIONS VALIDATIONS VALIDATIONS VALIDATIONS

function doesRestExist (req, res, next) {
  const id = req.params.id
  restModel.getRest(id).then(restaurant => {
    if(restaurant.length){
      next()
    }else{
      const status = 404
      const message = `Restaurant with id ${id} not found`
      next({ status, message })
    }
  })
}

function cleanseRest (req, res, next) {
  Object.keys(req.body).forEach(key => {
    if(!cleanseFields.includes(key)) delete req.body[key]
  })
  next()
}

function completeRest (req, res, next) {
  const errors = completeFields.filter(field => !req.body[field])
    .map(value => `${value} is required`)

  if(errors.length){
    const status = 400
    const message = `Fields are missing: ${errors.join(', ')}`
    next({ status, message })
  }
  next()
}

module.exports = {
  getRest, getAllRest, createRest, updateRest, destroyRest,
  validations: { doesRestExist, cleanseRest, completeRest }
}
