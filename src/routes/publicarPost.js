

const publicarPost = (req, res) => {
  const datosformulario2 = JSON.parse(req.body.datos)

  const { precio, expensa, provincia, ciudad, direccion, piso, descripcion, ambiente, dormitorio, banos, area, edad, operacion, vivienda, latitud, longitud } = datosformulario2

  if (precio !== null && expensa !== null && provincia !== null && ciudad !== null && direccion !== null && piso !== null && descripcion !== null && ambiente !== null && dormitorio !== null && banos !== null && area !== null && edad !== null && operacion !== null && vivienda !== null && latitud !== null && longitud !== null && req.body.datos) {  
    const nombreImagenes = req.files.map(a => {
      return a.filename
    })
    const nombreImagenes2 = {
      imagenes: nombreImagenes
    }
    console.log("nombreImagenes:", nombreImagenes2)

    const deTokenACorreo = require('../controllers/deTokenACorreo.js')
    const correo4 = deTokenACorreo(req, res)

    let datosformulario3 = JSON.parse(req.body.datos)

    const guardaFormulario = require("../models/guardaFormulario.js")
    guardaFormulario(correo4, datosformulario3, nombreImagenes2)

    if (guardaFormulario) {
      res.json({ Message: "Guardado con exito" })
    } else {
      res.json({ Message: "Error al guardar" })
    }
  } else {
    res.json({ Message2: "Se debe completar todos los datos" })
  }
}

module.exports = publicarPost
