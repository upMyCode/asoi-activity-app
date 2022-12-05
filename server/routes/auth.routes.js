const express = require('express');
const router = express.Router();
const userRegistration = require('../database/user/controller/registerUser')
const userLogIn = require('../database/user/controller/userLogIn')

router.post('/registration', userRegistration);
router.post('/login', userLogIn);

module.exports = router;