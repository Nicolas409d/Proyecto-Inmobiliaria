
const Sequelize = require('sequelize');
const sequelize = require("../models/sequelize.js")
const User33 = require("../models/User33.js")

const User22 = sequelize.define('user222', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  precio: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      inInt: true,
      min: 1
    }
  },
  expensa: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      inInt: true,
      min: 1
    }
  },
  provincia: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ciudad: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  direccion: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  numero: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      inInt: true,
      min: 1
    }
  },
  descripcion: {
    type: Sequelize.STRING(2000),
    allowNull: false,
  },
  ambiente: {
    type: Sequelize.STRING(3),
    allowNull: false,
    validate: {
      inInt: true,
      min: 1
    }
  },
  dormitorio: {
    type: Sequelize.STRING(3),
    allowNull: false,
    validate: {
      inInt: true,
      min: 1
    }
  },
  banos: {
    type: Sequelize.STRING(3),
    allowNull: false,
    validate: {
      inInt: true,
      min: 1,
      isIn: {
        args: [[1, 2, 3, 4, +5]],
        msg: "Los valores permitido debe ser 1, 2, 3, 4, +5"
      }
    }
  },
  area: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      inInt: true,
      min: 1
    }
  },
  edad: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      inInt: true,
      min: 1
    }
  },
  operacion: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  vivienda: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imagenes: {
    type: Sequelize.JSON,
    allowNull: false,
  },
  usuarioId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: User33,
      key: 'id'
    }
  },
  link: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  estado: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  latitud: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  longitud: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  tableName: 'formulario'
});

module.exports = User22
