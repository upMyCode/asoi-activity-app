const express = require('express');
const router = express.Router();
const userRegistration = require('../database/user/controller/registerUser')
const userLogIn = require('../database/user/controller/userLogIn')
const userDelete = require('../database/user/controller/userDelete')

router.post('/registration', userRegistration);
router.post('/login', userLogIn);
router.post('/delete', userDelete);

module.exports = router;