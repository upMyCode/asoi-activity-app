const {isUserExistById, deleteUserById} = require('../userService');

const userDelete = async (req, res, next) => {
  try {
    const data = req.body;
    const { id } = req.body;
    console.log(data)
    const userData = await isUserExistById(id);

    if (userData) {
      await deleteUserById(id);
      res.status(201).send(id);
      next();
    } else {
      res.status(400).send({message: "Пользователь не найден"})
    }
  } catch (e) {
    next(e);
  }
}

module.exports = userDelete;