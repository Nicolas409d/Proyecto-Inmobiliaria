

function inicionSesion2(inicionSesion, res) {

  console.log("inicionSesion:", inicionSesion)
  const correo2 = inicionSesion.email || null
  const contrasena2 = inicionSesion.contrasena || null

  if (correo2 === null) {
    return
  }

  const caracteresExtranos = /[<>{}=&|'"\/;\\-`]/g
  const correo3 = correo2.replace(caracteresExtranos, '')

  if (contrasena2 === null) {
    return
  }

  const caracteresExtranos2 = /[<>{}=&|]/g
  const contrasena3 = contrasena2.replace(caracteresExtranos2, '')

  const inicioDeSesion = require("../models/inicioDeSesion")
  inicioDeSesion(correo3, contrasena3, res)
}

module.exports = inicionSesion2


