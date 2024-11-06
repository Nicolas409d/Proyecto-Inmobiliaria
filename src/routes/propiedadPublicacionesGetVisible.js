

const express = require("express")
const path = require("path")
const app = express()

app.use("/propiedad/:linkPublicacion", express.static(path.join(__dirname, "public", "html", "6propiedad")))
app.use("/propiedad/:linkPublicacion", express.static(path.join(__dirname, "uploads")))
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.set("view engine", "ejs")

const propiedadPublicacionGet = (req, res) => {
  const linkPublicacion = req.params.linkPublicacion
  //const User22 = require("../models/User22.js")

  const buscarLink = require("../models/buscarLink.js")
  buscarLink(linkPublicacion, res)
}

module.exports = propiedadPublicacionGet
