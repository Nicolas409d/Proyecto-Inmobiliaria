
const Sequelize = require('sequelize');
const sequelize = require("../models/sequelize.js")

const User33 = sequelize.define('user333', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  usuario: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  correo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  contrasena: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  token: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
}, {
  tableName: 'usuarios'
});

module.exports = User33
