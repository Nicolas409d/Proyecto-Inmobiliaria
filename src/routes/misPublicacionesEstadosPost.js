

const misPublicacionesEstados = (req, res) => {

  const deTokenACorreo = require("../controllers/deTokenACorreo.js")

  const correo7 = deTokenACorreo(req, res)
  const idEstado = req.body.id

  const User33 = require("../models/User33.js")
  const User22 = require("../models/User22.js")

  User33.hasOne(User22, { foreignKey: 'usuarioId' })
  User22.belongsTo(User33, { foreignKey: 'usuarioId' })

  const misPublicacionesCambiaDeEstados = require("../models/misPublicacionesCambiaDeEstados.js")
  misPublicacionesCambiaDeEstados(correo7, idEstado, res)
}

module.exports = misPublicacionesEstados
