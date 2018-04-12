var express = require('express');
var router = express.Router();
const {AuthenticationController} = require('../controllers/user')

router.post('/login', AuthenticationController)