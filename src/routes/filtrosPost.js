

const filtrosPost = (req, res) => {

  //const busqueda = req.body  

  let ciudadRecibida = req.body.ciudad
  let provinciaRecibida = req.body.provincia
  let operacionRecibida = req.body.operacion
  let viviendaRecibida = req.body.propiedad
  let precioMinimoRecibida = req.body.precioMinimo
  let precioMaximoRecibida = req.body.precioMaximo
  let dormitorioRecibida = req.body.dormitorio
  let ambienteRecibida = req.body.ambiente

  let paginaCliente = req.body.pagina

  const alquileresPublicaciones = require("../models/alquilerPublicaciones")
  alquileresPublicaciones(ciudadRecibida, provinciaRecibida, operacionRecibida, viviendaRecibida, precioMinimoRecibida, precioMaximoRecibida, dormitorioRecibida, ambienteRecibida, paginaCliente, res)
}

module.exports = filtrosPost
