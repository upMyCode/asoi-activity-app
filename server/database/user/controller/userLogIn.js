const {isUserExistWithLoginData} = require('../userService');

const userLogIn = async(req, res, next) => {
  try {
    const { userMobilePhone, userFIO, userPassword } = req.body;

    const searchUser = await isUserExistWithLoginData(userMobilePhone, userFIO, userPassword);

    if (searchUser.statusExists) {
      res.status(201).send(searchUser.data)
      next();
    } else {
      res.status(400).send({message: 'User is not exist'})
    }
  } catch (e) {
    next(e);
  }
}

module.exports = userLogIn;