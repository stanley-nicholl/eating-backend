const express = require('express')
const router = express.Router()
const { userController: ctrl } = require('../controllers')


router.get('/', ctrl.getAllUser)
router.get('/:id', ctrl.validations.doesUserExist, ctrl.getUser)
router.post('/', ctrl.validations.cleanseUser, ctrl.validations.completeUser, ctrl.createUser)
router.put('/:id', ctrl.validations.doesUserExist, ctrl.validations.cleanseUser, ctrl.validations.completeUser, ctrl.updateUser)
router.delete('/:id', ctrl.validations.doesUserExist, ctrl.destroyUser)

module.exports = router
