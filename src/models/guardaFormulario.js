

function guardaFormulario(correo4, datosformulario3, nombreImagenes2) {
  console.log("guardaFormulario")

  const database2 = "c"
  const sequelize = require("../models/sequelize.js")
  const User33 = require("../models/User33.js")
  const User22 = require("../models/User22.js")

  User33.hasOne(User22, { foreignKey: 'usuarioId' })
  User22.belongsTo(User33, { foreignKey: 'usuarioId' })

  async function inicio(correo4, datosformulario3, nombreImagenes2) {

    try {
      await sequelize.authenticate();
      console.log("Se establecion la conexion con la base de datos")

      await sequelize.query(`CREATE DATABASE IF NOT EXISTS \`${database2}\`;`)

      await sequelize.query(`USE \`${database2}\`;`)

      await sequelize.sync({ force: false })

      const Usuario3 = await User33.findOne({
        where: { correo: correo4 },
      })

      if (!Usuario3) {
        return
      }

      const { v4: uuidv4 } = require("uuid")
      const uniqueId = uuidv4()

      const precioModificado = datosformulario3.precio.replace(/\./g, "")

      const expensaModificada = datosformulario3.expensa.replace(/\./g, "")

      const guardarPublicacion = await User22.bulkCreate([
        { precio: precioModificado, expensa: expensaModificada, provincia: datosformulario3.provincia, ciudad: datosformulario3.ciudad, direccion: datosformulario3.direccion, numero: datosformulario3.piso, descripcion: datosformulario3.descripcion, ambiente: datosformulario3.ambiente, dormitorio: datosformulario3.dormitorio, banos: datosformulario3.banos, area: datosformulario3.area, edad: datosformulario3.edad, operacion: datosformulario3.operacion, vivienda: datosformulario3.vivienda, imagenes: nombreImagenes2.imagenes, usuarioId: Usuario3.id, link: uniqueId, estado: true, latitud: datosformulario3.latitud, longitud: datosformulario3.longitud }
      ])

      if (guardarPublicacion) {
      } else {
        console.log("Error al guardar el formulario")
      }

    } catch (err) {
      console.log("err:", err)
    }
  }
  inicio(correo4, datosformulario3, nombreImagenes2)
}

module.exports = guardaFormulario
