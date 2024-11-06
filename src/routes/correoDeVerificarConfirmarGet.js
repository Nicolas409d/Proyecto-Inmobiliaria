


const correoDeVerificarConfirmar = (req, res) => {
  const token2 = req.query.token

  const jwt = require("jsonwebtoken")
  const SECRET_KEY = "palabbra_secreta"
  jwt.verify(token2, SECRET_KEY, (err, correo5) => {
    if (err) {
      console.log("err:", err)
      return res.status(403).send('Token no valido')
    }

    const correo6 = correo5.userEmail
    //const User33 = require("../models/User33.js")

    const correoTokenTrue = require("../models/correoTokenTrue")
    correoTokenTrue(correo6)
  })
  res.redirect('/acceder')
}

module.exports = correoDeVerificarConfirmar
