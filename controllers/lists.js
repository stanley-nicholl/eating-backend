const { listModel } = require('../models')
const moment = require('moment')
const completeFields = [ `restaurant_id`, `user_id`]
const cleanseFields = ['user_id', 'restaurant_id', 'completed', 'date_completed', 'recommend', 'comment']


// ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES
// ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES ROUTES

function getAllLists(req, res, next) {
  listModel.getAllLists().then(lists => {
    res.status(200).json({ lists })
  })
}

function getList(req, res, next) {
  listModel.getList(req.params.id).then(list => {
    // moment("12-25-1995", "MM-DD-YYYY") - string plus format
    res.status(200).json({ list })
  })
}

function createList(req, res, next) {
  const result = req.body.lists.map(list =>{
    return listModel.createList(list)
  })
  Promise.all(result)
  .then(lists => {
    res.status(201).json({ lists })
  })
}


// not sure should return the added list item rather than the full list for that user
function updateList(req, res, next) {
  listModel.updateList(req.params.id, req.body).then(list => {
    res.status(200).json({ list })
  })
}

function destroyList(req, res, next) {
  listModel.destroyList(req.params.id).then(list => {
    res.status(200). json({ message: `List item deleted` })
  })
}

// VALIDATIONS VALIDATIONS VALIDATIONS VALIDATIONS VALIDATIONS VALIDATIONS
// VALIDATIONS VALIDATIONS VALIDATIONS VALIDATIONS VALIDATIONS VALIDATIONS

function doesListExist (req, res, next) {
  const id = req.params.id
  listModel.getList(id).then(list => {
    if(list.length){
      next()
    }else{
      const status = 404
      const message = `List with id ${id} could not be found`
      next({ status, message })
    }
  })
}

function cleanseList (req, res, next) {
  Object.keys(req.body).forEach(key => {
    if(!cleanseFields.includes(key)) delete req.body[key]
  })
  next()
}

function completeList (req, res, next) {
  const errors = completeFields.filter(field => !req.body[field])
    .map(value => `${value} is required`)

  if(errors.length){
    const status = 400
    const message = `Fields missing: ${errors.join(', ')}`
    next({ status, message })
  }
  next()
}

module.exports = {
  getList, getAllLists, createList, updateList, destroyList,
  validations: { doesListExist, cleanseList, completeList }
}
