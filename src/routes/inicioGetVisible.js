
const path = require("path")

const inicioGet = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', '4inicio', 'index.html'))
}

module.exports = inicioGet
