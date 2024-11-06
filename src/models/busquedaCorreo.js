

const database2 = "c"

const sequelize = require("../models/sequelize.js")

const User33 = require("../models/User33.js")


async function busquedaCorreo(correoRecuperar, res) {
  try {
    await sequelize.authenticate();
    console.log("Se estalecion la conexion con la base de datos")

    await sequelize.query(`CREATE DATABASE IF NOT EXISTS \`${database2}\`;`)

    await sequelize.query(`USE \`${database2}\`;`)

    await sequelize.sync({ force: false })

    const Usuario3 = await User33.findOne({
      where: { correo: correoRecuperar },
    })

    if (!Usuario3) {
      res.json({ message: "Correo no encontrado" })
      return
    }

    if (Usuario3) {
      res.json({ link: `/correo-del-usuario` })
    }
  } catch (err) {
    console.error('Error al buscar el correo:', err);
  };
}

module.exports = busquedaCorreo
