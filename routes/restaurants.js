const express = require('express')
const router = express.Router()
const { restaurantController: ctrl } = require('../controllers')

router.get('/', ctrl.getAllRest)
router.get('/:id', ctrl.validations.doesRestExist, ctrl.getRest)
router.post('/', ctrl.validations.cleanseRest, ctrl.validations.completeRest, ctrl.createRest)
router.put('/:id', ctrl.validations.doesRestExist, ctrl.validations.cleanseRest, ctrl.validations.completeRest, ctrl.updateRest)
router.delete('/:id', ctrl.validations.doesRestExist, ctrl.destroyRest)

module.exports = router
