const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const database = process.env.POSTGRES_DB;
const user = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const host = process.env.POSTGRES_HOST;

console.log(database, user, password)

const db = new Sequelize(
    database,
    user,
    password,
    {
      dialect: 'postgres',
      host: host
    });


module.exports = db;