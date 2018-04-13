var express = require('express')
var router = express.Router()
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy')
const {AuthenticationController} = require('../controllers/user')

router.post('/register', AuthenticationController.register)
router.post('/login', AuthenticationControllerPolicy.login, AuthenticationController.login)
router.get('/list', AuthenticationController.list)

module.exports = router
