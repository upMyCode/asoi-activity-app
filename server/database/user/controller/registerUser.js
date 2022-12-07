const {register, isUserExist} = require('../userService');
const USER = require('../../models/USER');
const userRegistration = async(req, res, next) => {
  try {
    const {userFIO, userEmail, userMobilePhone, userFaculty, userGroup, userPassword} = req.body;

    const searchUser = await isUserExist(userEmail, userMobilePhone);

    if (searchUser.statusExists) {
      res.status(400).send({message: 'User already exists with email or/and password'});
    } else {
      console.log('error')
      const newUser = await register(userFIO, userEmail, userMobilePhone, userFaculty, userGroup, userPassword);
      res.status(201).send({body: {id: newUser.id}});
    }
    next();
  } catch (e) {
    next(e);
  }
}

module.exports = userRegistration;