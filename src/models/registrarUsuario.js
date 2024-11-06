


const database2 = "c"
const sequelize = require("../models/sequelize.js")
const User = require("../models/User33.js")

async function registrarUsuario(usuario, email, password, res) {
  try {
    await sequelize.authenticate();
    console.log("Se estalecion la coneccion con la base de datos")

    await sequelize.query(`CREATE DATABASE IF NOT EXISTS \`${database2}\`;`)

    await sequelize.query(`USE \`${database2}\`;`)

    await sequelize.sync({ force: false })

    const bcrypt = require("bcrypt")
    async function hashPassword(password) {
      const saltRounds = 10
      const hasheadPassword = await bcrypt.hash(password, saltRounds)

      const CorreoComprobacion = await User.findOne({
        where: { correo: email },
      })
      if (CorreoComprobacion) {
        res.json({ mensaje: "Correo ya existente" })
        return
      }

      await User.create(
        { usuario: usuario, correo: email, contrasena: hasheadPassword, token: "false" }
      )
      res.json({ mensaje2: "Cuenta creada", redirect: `/correo-de-verificacion?email=${email}` })
    }
    hashPassword(password)

  } catch (err) {
    console.log("ERR:", err)

    if (err.name === 'SequelizeValidationError') {
      console.log("fuera del rango contraseña", err.errors[0].message)
      res.json({ mensaje: err.errors[0].message })
    }

    if (err.name === 'SequelizeUniqueConstraintError') {
      console.log("repetido:", err.errors[0].message)
      res.json({ mensaje: err.errors[0].message })
    }
  }
}

module.exports = registrarUsuario
