
const path = require("path")

const registroGet = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', '2registro', 'index.html'))
}

module.exports = registroGet