const express = require('express')
const router = express.Router()
const { listController: ctrl } = require('../controllers')

router.get('/', ctrl.getAllLists)
router.get('/:id', ctrl.validations.doesListExist, ctrl.getList)
router.post('/', ctrl.validations.cleanseList, ctrl.validations.completeList, ctrl.createList)
router.put('/:id', ctrl.validations.doesListExist, ctrl.validations.cleanseList, ctrl.validations.completeList, ctrl.updateList)
router.delete('/:id', ctrl.validations.doesListExist, ctrl.destroyList)

module.exports = router
