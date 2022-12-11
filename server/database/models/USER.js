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
    allowNull: false,
  },
  userEmail: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  userMobilePhone: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  userFaculty: {
    type: DataTypes.STRING
  },
  userGroup: {
    type: DataTypes.STRING
  },
  userPassword: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},{timestamps: false});

module.exports = USER;