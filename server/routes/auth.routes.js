const express = require('express');
const router = express.Router();

router.post('/registration',(req, res, next) => {
  console.log(req.body)
})
module.exports = router;