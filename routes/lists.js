const express = require('express')
const router = express.Router()
const { listController: ctrl } = require('../controllers')

router.get('/', ctrl.getAllLists)
router.get('/:id', ctrl.getList)
router.post('/', ctrl.createList)
router.put('/:id', ctrl.updateList)
router.delete('/:id', ctrl.validations.doesListExist, ctrl.destroyList)

module.exports = router
