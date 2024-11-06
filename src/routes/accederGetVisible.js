
const path = require("path")

const accederGet = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', '1acceder', 'index.html'))
}

module.exports = accederGet
