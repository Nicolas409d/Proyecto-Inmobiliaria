


const database2 = "c"

const Sequelize = require('sequelize');

const sequelize = require("../models/sequelize.js")

const User22 = require("../models/User22.js")

async function alquileresPublicaciones(ciudadRecibida, provinciaRecibida, operacionRecibida, viviendaRecibida, precioMinimoRecibida, precioMaximoRecibida, dormitorioRecibida, ambienteRecibida, paginaCliente, res) {
  try {

    await sequelize.authenticate();
    console.log("Se estalecion la conexion con la base de datos")

    await sequelize.query(`CREATE DATABASE IF NOT EXISTS \`${database2}\`;`)

    await sequelize.query(`USE \`${database2}\`;`)

    await sequelize.sync({ force: false })

    const ciudad = ciudadRecibida
    const provincia = provinciaRecibida
    const operacion = operacionRecibida
    const vivienda = viviendaRecibida
    const precioMinimo = precioMinimoRecibida
    const precioMaximo = precioMaximoRecibida
    const dormitorio = dormitorioRecibida
    const ambiente = ambienteRecibida

    const pagina2 = paginaCliente

    const where = {
      ...(operacion ? { operacion } : {}),
      ...(vivienda ? { vivienda } : {}),
      ...(precioMinimo !== null && precioMaximo !== null ? {
        precio: {
          [Sequelize.Op.gte]: precioMinimo,
          [Sequelize.Op.lte]: precioMaximo
        }
      } : {}),
      ...(precioMinimo !== null ? {
        precio: {
          [Sequelize.Op.gte]: precioMinimo,
        }
      } : {}),
      ...(precioMaximo !== null ? {
        precio: {
          [Sequelize.Op.lte]: precioMaximo
        }
      } : {}),
      ...(dormitorio != null ? { dormitorio } : {}),
      ...(ambiente != null ? { ambiente } : {}),
      ...(provincia ? { provincia } : {}),
      ...(ciudad ? { ciudad } : {}),
      estado: true
    }

    const limite = 5
    const pagina = Number(pagina2)
    const offset = (pagina - 1) * limite
    console.log("pagina:", pagina)

    const producto = await User22.findAll({
      where, order: [
        ["createdAt", "DESC"]
      ],
      attributes: {
        exclude: ["updatedAt", "usuarioId", "id"]
      },
      limit: limite,
      offset: offset
    })

    const total = await User22.count({ where })
    if (producto.length === 0) {
      res.json({ filtroJsonPublicaciones: "No se encontro producto" })
    } if (producto.length !== 0) {
      res.json({ filtroJsonPublicaciones: producto, cantidad: total })
    }

  } catch (err) {
    console.log("err:", err)
  }
}

module.exports = alquileresPublicaciones

