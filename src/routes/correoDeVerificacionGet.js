

const correoDeVerificacionGet = (req, res) => {
  const userEmail = req.query.email
  console.log("userEmail:", userEmail)

  const jwt = require("jsonwebtoken")

  const SECRET_KEY = "palabbra_secreta"
  const token = jwt.sign({ userEmail }, SECRET_KEY, { expiresIn: '2d' })

  const html = `<a href='http://localhost:3000/correo-de-verificacion/confirmar?token=${token}'>Confirma tu correo electronico</a>
    <title>Correo de verificacion</title>
    `
  res.send(html)
}

module.exports = correoDeVerificacionGet
