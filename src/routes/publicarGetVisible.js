
const express = require("express")
const app = express()

app.set("view engine", "ejs")

const publicarGet = (req, res) => {
  const csrfToken = req.csrfToken()
  res.render('7publicar/formulario', { csrfToken })
}

module.exports = publicarGet
