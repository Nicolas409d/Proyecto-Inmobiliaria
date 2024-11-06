
const path = require("path")

const misPublicacionesGet = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', '8mis-publicaciones', 'index.html'))
}

module.exports = misPublicacionesGet
