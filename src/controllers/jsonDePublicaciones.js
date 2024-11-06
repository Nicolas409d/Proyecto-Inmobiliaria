


function jsonPublicacion(req, res) {

  async function funct1(req, res) {
    return new Promise((resolve, reject) => {

      const database2 = "c"
      const sequelize = require("../models/sequelize.js")

      const User33 = require("../models/User33.js")

      const User22 = require("../models/User22.js")

      User33.hasMany(User22, { foreignKey: 'usuarioId' })
      User22.belongsTo(User33, { foreignKey: 'usuarioId' })

      async function inicio(req, res) {
        try {
          await sequelize.authenticate();
          console.log("Se estalecion la conexion con la base de datos")

          await sequelize.query(`CREATE DATABASE IF NOT EXISTS \`${database2}\`;`)

          await sequelize.query(`USE \`${database2}\`;`)

          await sequelize.sync({ force: false })

          const deTokenACorreo = require("./deTokenACorreo.js")
          const deTokenACorreo2 = deTokenACorreo(req, res)

          const Usuario3 = await User33.findOne({
            where: { correo: deTokenACorreo2 },
            attributes: { exclude: ["id", "usuario", "correo", "contrasena"] },
            include: [{
              model: User22,
              attributes: { exclude: ["usuarioId"] },
            }]
          })

          if (!Usuario3) {
            return
          }
          res.send({ jsonPublicaciones: Usuario3.user222s })
        } catch (err) {
          console.log("err:", err)
        }
      }
      inicio(req, res)
    })
  }

  async function ejecutar(req, res) {
    try {
      const funct1a = await funct1(req, res)
    } catch (err) {
      console.log("err:", err)
    }
  }
  ejecutar(req, res)
}

module.exports = jsonPublicacion

