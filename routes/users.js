const express = require('express')
const router = express.Router()
const { userController: ctrl } = require('../controllers')


router.get('/', ctrl.getAllUser)
router.get('/:email', ctrl.validations.doesUserExist, ctrl.getUser)
router.post('/', ctrl.validations.preventDuplicate, ctrl.validations.cleanseUser, ctrl.validations.completeUser, ctrl.createUser)
router.put('/:email', ctrl.validations.doesUserExist, ctrl.validations.cleanseUser, ctrl.updateUser)
router.delete('/:email', ctrl.validations.doesUserExist, ctrl.destroyUser)

module.exports = router
