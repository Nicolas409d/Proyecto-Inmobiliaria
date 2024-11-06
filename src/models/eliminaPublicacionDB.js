

const database2 = "c"

const sequelize = require("../models/sequelize.js")

const User33 = require("../models/User33.js")

const User22 = require("../models/User22.js")


async function eliminarProducto(correo7, id7, res) {
  try {
    await sequelize.authenticate();
    console.log("Se estalecion la conexion con la base de datos")

    await sequelize.query(`CREATE DATABASE IF NOT EXISTS \`${database2}\`;`)

    await sequelize.query(`USE \`${database2}\`;`)

    await sequelize.sync({ force: false })

    const Usuario3 = await User33.findOne({
      where: { correo: correo7 },
      include: [{
        model: User22,
        where: { id: id7 }
      }],
    })

    if (!Usuario3) {
      return
    }
    if (Usuario3) {
      producto = Usuario3.user222s[0]
      console.log("producto:", producto)
      if (producto) {
        console.log('Publicacion eliminada')
        await producto.destroy()
        res.json({ Message: "producto eliminado con exito" })
        return
      }
    }
  } catch (err) {
    console.error('Error al buscar el correo:', err);
  };
}

module.exports = eliminarProducto
