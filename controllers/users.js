const { userModel } = require('../models')
const cleanseFields = [ `email`, `first_name`, `last_name`, 'foodie', 'score']
const completeFields = [ `email`, `first_name`, `last_name` ]

// ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES
// ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES

function getAllUser(req, res, next) {
  userModel.getAllUser().then(users => {
    res.status(200).json({ users })
  })
}

function getUser(req, res, next) {
  userModel.getUser(req.params.id).then(user => {
    res.status(200).json({ user })
  })
}

function createUser(req, res, next) {
  userModel.createUser(req.body).then(user => {
    res.status(201).json({ user })
  })
}

function updateUser(req, res, next) {
  userModel.updateUser(req.params.id, req.body).then(user => {
    res.status(200).json({ user })
  })
}

function destroyUser(req, res, next) {
  userModel.destroyUser(req.params.id).then(user => {
    res.status(200).json({ message: `User deleted`})
  })
}

// VALIDATIONS VALIDATIONS VALIDATIONS VALIDATIONS VALIDATIONS VALIDATIONS
// VALIDATIONS VALIDATIONS VALIDATIONS VALIDATIONS VALIDATIONS VALIDATIONS

function doesUserExist (req, res, next) {
  const id = req.params.id
  userModel.getUser(id).then(user => {
    if(user.length){
      next()
    }else{
      const status = 404
      const message = `User with id ${id}`
      next({ status, message })
    }
  })
}

function cleanseUser (req, res, next) {
  Object.keys(req.body).forEach(key => {
    if(!cleanseFields.includes(key)) delete req.body[key]
  })
  next()
}

function completeUser (req, res, next) {
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
  getUser, getAllUser, createUser, updateUser, destroyUser,
  validations: { doesUserExist, cleanseUser, completeUser }
}
