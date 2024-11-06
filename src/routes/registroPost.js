

const registroPost = (req, res) => {
  const registroReq = req.body.registro

  registrarUsuario = require("../models/registrarUsuario.js")
  registrarUsuario(registroReq.usuario, registroReq.email, registroReq.password, res)
}

module.exports = registroPost
