

const jwt = require("jsonwebtoken")

cookieTokenAutentificacion = (req, res, next) => {

  const token2 = req.cookies.token

  if (!token2) {
    return res.redirect("acceder")
  }

  const SECRET_KEY = "palabbra_secreta"
  jwt.verify(token2, SECRET_KEY, (err, user2) => {
    if (err) {
      return res.redirect("acceder")
    }
    const correoObtenido = user2.correo3

    const database2 = "c"
    const sequelize = require("../models/sequelize.js")
    const User = require("../models/User33.js")

    async function correoVerificacion(correoObtenido) {
      try {
        await sequelize.authenticate();
        console.log("Se establecion la conexion con la base de datos")

        await sequelize.query(`CREATE DATABASE IF NOT EXISTS \`${database2}\`;`)

        await sequelize.query(`USE \`${database2}\`;`)

        await sequelize.sync({ force: false })

        const correoVerifica = await User.findOne({
          where: {
            correo: correoObtenido
          }
        })

        if (correoVerifica) {
          next()
        } else {
          res.redirect("acceder")
        }
      } catch (err) {
        return
      }
    }
    correoVerificacion(correoObtenido)
  })
}

module.exports = cookieTokenAutentificacion
