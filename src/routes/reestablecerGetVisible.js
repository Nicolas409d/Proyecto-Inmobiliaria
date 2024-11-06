

const path = require("path")

const reestablecerGet = (req, res) => {
  console.log("/restablecer - GET")
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', '3reestablecerContrasena', 'reestablecer.html'))
}

module.exports = reestablecerGet