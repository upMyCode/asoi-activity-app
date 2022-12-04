const express = require('express');
const router = express.Router();
const userRegistration = require('../database/user/controller/registerUser')

router.post('/registration', userRegistration)

module.exports = router;