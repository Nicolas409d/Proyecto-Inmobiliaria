

const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


const database2 = "c"

const sequelize = require("../models/sequelize.js")

const User = require("../models/User33.js")

async function inicioDeSesion(correo3, contrasena3, res) {
  try {
    await sequelize.authenticate();
    console.log("Se estalecion la coneccion con la base de datos")

    await sequelize.query(`CREATE DATABASE IF NOT EXISTS \`${database2}\`;`)

    await sequelize.query(`USE \`${database2}\`;`)

    await sequelize.sync({ force: false })

    async function verifyPassword(contrasena3, correo3) {
      const hasheadPassword = await User.findOne({ where: { correo: correo3 } })
      if (!hasheadPassword) {
        res.status(200).json({ mensaje2: "Correo no encotrado" })
        return
      }

      const hasheadPassword2 = hasheadPassword.contrasena
      const match = await bcrypt.compare(contrasena3, hasheadPassword2)
      if (match) {

        if (hasheadPassword.token === true) {
          console.log("Token verificado")
        } else {
          console.log("Token aun no verificado")
          return
        }
      } else {
        res.json({ mensaje2: "Error al loguearse" })
        return
      }

      const SECRET_KEY = "palabbra_secreta"
      const token = jwt.sign({ correo3 }, SECRET_KEY, { expiresIn: '30d' })
      res.cookie('token', token, { httpOnly: false, sameSite: 'Lax', })
      res.status(200).json({ mensaje: "registro exitoso" })
      return
    }
    verifyPassword(contrasena3, correo3)
  } catch (err) {
    console.error('Error al buscar el correo:', err);
  };
}

module.exports = inicioDeSesion
