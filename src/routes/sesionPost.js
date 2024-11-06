


const sesionPost = (req, res) => {
  const inicionSesion = req.body

  const inicionSesion2 = require("../controllers/inicioSesion.js")
  inicionSesion2(inicionSesion, res)
}

module.exports = sesionPost
