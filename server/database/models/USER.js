const db = require('../dbConnections');
const {DataTypes, UUIDV4} = require('sequelize');

const USER = db.define('USER',{
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  userFIO: {
    type: DataTypes.STRING,
  },
  userEmail: {
    type: DataTypes.STRING,
    unique: true
  },
  userMobilePhone: {
    type: DataTypes.STRING,
    unique: true
  },
  userFaculty: {
    type: DataTypes.STRING
  },
  userGroup: {
    type: DataTypes.STRING
  },
  userPassword: {
    type: DataTypes.STRING
  }
},{timestamps: false});

module.exports = USER;