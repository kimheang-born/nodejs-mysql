const Sequelize = require('sequelize');

const dbConnection = process.env.DB_CONNECTION;
const dbHost = process.env.DB_HOST;
const dbDatabase = process.env.DB_DATABASE;
const dbUserName = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize(dbDatabase, dbUserName, dbPassword, {
  dialect: dbConnection,
  host: dbHost,
});

module.exports = sequelize;
