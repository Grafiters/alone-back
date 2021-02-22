const Sequelize = require('sequelize');

const sequelize = new Sequelize('alone', 'root', 'alone123', {
  host: 'db',
  port: 3306,
  dialect: 'mysql'
});

module.exports = sequelize;