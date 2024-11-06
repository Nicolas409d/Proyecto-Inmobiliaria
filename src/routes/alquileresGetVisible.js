

const path = require("path")

const alquileresGet = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', '5alquileres', 'index.html')) 
}

module.exports = alquileresGet
