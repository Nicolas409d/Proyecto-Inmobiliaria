
const jsonPublicacionesGet = (req,res)=>{   
    const jsonPublicacion = require('../controllers/jsonDePublicaciones.js')  
    jsonPublicacion(req,res)
}

module.exports = jsonPublicacionesGet 
