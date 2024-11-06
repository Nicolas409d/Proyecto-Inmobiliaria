

const database2 = "c"

const sequelize = require("../models/sequelize.js")

const User33 = require("../models/User33.js")

async function correoTokenTrue(correo6) {
  try {
    await sequelize.authenticate();
    console.log("Se estalecion la conexion con la base de datos")

    await sequelize.query(`CREATE DATABASE IF NOT EXISTS \`${database2}\`;`)

    await sequelize.query(`USE \`${database2}\`;`)

    await sequelize.sync({ force: false })

    User33.update({ token: 'true' }, {
      where: {
        correo: correo6,
      },
    })
  } catch (err) {
    console.error('Error al buscar el correo:', err);
  };
}

module.exports = correoTokenTrue

