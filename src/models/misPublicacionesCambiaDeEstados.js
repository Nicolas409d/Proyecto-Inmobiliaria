

const database2 = "c"
const sequelize = require("../models/sequelize.js")
const User33 = require("../models/User33.js")
const User22 = require("../models/User22.js")


async function misPublicacionesCambiaDeEstados(correo7, id7, res) {
  try {

    await sequelize.authenticate();
    console.log("Se estalecion la coneccion con la base de datos")

    await sequelize.query(`CREATE DATABASE IF NOT EXISTS \`${database2}\`;`)

    await sequelize.query(`USE \`${database2}\`;`)

    await sequelize.sync({ force: false })

    console.log("id7:", id7)
    console.log("correo7:", correo7)

    const Usuario3 = await User33.findOne({
      where: { correo: correo7 },
      include: [{
        model: User22,
        where: { id: id7 }
      }],
    })
    if (!Usuario3) {
      console.log('Usuario no encontrado')
      return
    }

    if (Usuario3) {
      console.log("Usuario3:", Usuario3)
      if (Usuario3.user222s[0].dataValues.id === id7 && Usuario3.user222s[0].dataValues.estado == true) {
        Usuario3.user222s[0].estado = false
        await Usuario3.user222s[0].save()
        res.json({ estado: false })
      } else if (Usuario3.user222s[0].dataValues.id === id7 && Usuario3.user222s[0].dataValues.estado == false) {
        Usuario3.user222s[0].estado = true
        await Usuario3.user222s[0].save()
        res.json({ estado: true })
      }
    } else {
      console.log("No se escontro el estado")
    }
  } catch (err) {
    console.error('Error al buscar el correo:', err);
  };
}

module.exports = misPublicacionesCambiaDeEstados
