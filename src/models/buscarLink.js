

const database2 = "c"

const sequelize = require("../models/sequelize.js")

const User22 = require("../models/User22.js")

async function buscarLink(link2, res) {
  try {

    await sequelize.authenticate();
    console.log("Se estalecion la conexion con la base de datos")

    await sequelize.query(`CREATE DATABASE IF NOT EXISTS \`${database2}\`;`)

    await sequelize.query(`USE \`${database2}\`;`)

    await sequelize.sync({ force: false })

    const Usuario2 = await User22.findOne({
      where: { link: link2 },
      attributes: { exclude: ["updatedAt", "usuarioId", "estado", "id"] },
    })

    const fechaAlterada = Usuario2.createdAt
    const fechaAlterada2 = fechaAlterada.toISOString().split("T")[0]

    await res.render('6propiedad/propiedad', { pagina: Usuario2.dataValues, fechaFormato: fechaAlterada2 })    //index.ejs    //propiedad   va sin extencion

  } catch (err) {
    console.error('Error al buscar el correo:', err);
  };
}

module.exports = buscarLink
