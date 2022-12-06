const express = require('express');
const router = express.Router();
const userRegistration = require('../database/user/controller/registerUser')
const userLogIn = require('../database/user/controller/userLogIn')
const userLogOut = require('../database/user/controller/userLogOut')

router.post('/registration', userRegistration);
router.post('/login', userLogIn);
router.post('/logout', userLogOut);

module.exports = router;