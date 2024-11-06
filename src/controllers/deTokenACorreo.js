

const jwt = require("jsonwebtoken")

function deTokenACorreo(req, res, next) {

  const token3 = req.cookies.token

  if (!token3) {
    res.redirect("acceder")
    return
  }

  const SECRET_KEY = "palabbra_secreta"
  const revelado = jwt.verify(token3, SECRET_KEY, (err, user2) => {
    if (err) {
      res.send('Acceso denegado')
      return res.status(403).send('Token no valido')
    }
    return user2.correo3
  })
  return revelado
}

module.exports = deTokenACorreo
