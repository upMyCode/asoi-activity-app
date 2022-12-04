const {register, isUserExist} = require('../userService');
const USER = require('../../models/USER');
const userRegistration = async(req, res, next) => {
  try {
    const {userFIO, userEmail, userMobilePhone, userFaculty, userGroup, userPassword} = req.body;

    const searchUser = await isUserExist(userEmail, userMobilePhone);

    if (searchUser.statusExists) {
      return res.status(400).send({message: 'User already exists'});
    }

    const newUser = await register(userFIO, userEmail, userMobilePhone, userFaculty, userGroup, userPassword);
    const searchUserAfterRegistration = await isUserExist(userEmail, userMobilePhone);

    res.status(201).send({body: {id: searchUserAfterRegistration?.data.id}});

    const allUSERS = await USER.findAll();
    console.log(allUSERS);

    next();
  } catch (e) {
    next(e);
  }
}

module.exports = userRegistration;