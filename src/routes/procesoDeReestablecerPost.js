

const porcesoDeReestablecer = (req, res) => {  
  const correoRecuperar = req.body.email

  const busquedaCorreo = require("../models/busquedaCorreo.js")
  busquedaCorreo(correoRecuperar, res)
}

module.exports = porcesoDeReestablecer
