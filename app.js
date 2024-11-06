


const express = require("express")
const path = require("path")

const app = express()
const PORT = 3000

app.use(express.json()) 

const cookieParser = require("cookie-parser")
app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'public', 'html')))

app.set("views", path.join(__dirname, "public", "html"))

app.use("/uploads", express.static(path.join(__dirname, 'uploads')))

require("dotenv").config();


app.get("/", (req,res) => {
  res.redirect("/inicio")
})


const accederGet = require("./src/routes/accederGetVisible.js")
app.get("/acceder", accederGet)

const middlewareValidator = require("./src/middleware/middlewareValidator.js") 
const sesionPost = require("./src/routes/sesionPost.js")
app.post("/sesion", middlewareValidator, sesionPost)


const registroGet = require("./src/routes/registroGetVisible.js")
app.get("/registro", registroGet)

const middlewareValidatorRegistro = require("./src/middleware/middlewareValidatorRegistro")
const registroPost = require("./src/routes/registroPost.js")
app.post("/registro", middlewareValidatorRegistro, registroPost)
 
const correoDeVerificacionGet = require("./src/routes/correoDeVerificacionGet.js")
app.get("/correo-de-verificacion", correoDeVerificacionGet)

const correoDeVerificarConfirmar = require("./src/routes/correoDeVerificarConfirmarGet.js")
app.get("/correo-de-verificacion/confirmar", correoDeVerificarConfirmar)


const reestablecerGet =  require("./src/routes/reestablecerGetVisible.js")
app.get("/reestablecer", reestablecerGet)

const porcesoDeReestablece = require("./src/routes/procesoDeReestablecerPost.js")
app.post("/proceso-de-reestablecer", porcesoDeReestablece)

app.get("/correo-del-usuario", (req,res)=>{    ///confirmar/:token
  console.log("/correo-del-usuario - GET")
  res.end()
})                                


const inicioGet = require("./src/routes/inicioGetVisible.js")
app.get("/inicio", inicioGet)

const inicioPost = require("./src/routes/inicioPost.js")
app.post("/inicio", inicioPost)


const alquileresGet = require("./src/routes/alquileresGetVisible.js")
app.get("/alquileres", alquileresGet)

const filtrosPost = require("./src/routes/filtrosPost.js")
app.post("/filtros", filtrosPost)


app.use("/propiedad/:linkPublicacion", express.static(path.join(__dirname, "uploads")))
app.set("view engine", "ejs")
const propiedadPublicacionGet = require("./src/routes/propiedadPublicacionesGetVisible.js")
app.get("/propiedad/:linkPublicacion", propiedadPublicacionGet)


const bodyParser = require("body-parser")
app.use(bodyParser.json())

const csrf = require("csurf")
const csrfProtection = csrf({ 
  cookie: true,
  value: (req) => req.headers['csurf']  
})
const inicioSesionToken = require("./src/middleware/inicioSesionToken.js")
const publicarGet = require("./src/routes/publicarGetVisible.js")
app.get("/publicar", inicioSesionToken, csrfProtection, publicarGet)

const upload = require("./src/controllers/imagenesMulter.js")
const publicarPost = require("./src/routes/publicarPost.js")
app.post("/publicar", upload.array('image', 10), publicarPost)


app.use("/uploads", express.static(path.join(__dirname, 'uploads')))  
const misPublicacionesGet = require("./src/routes/misPublicacionesGetVisible.js")
app.get("/mis-publicaciones", inicioSesionToken, misPublicacionesGet)

const jsonPublicacionesGet = require("./src/routes/jsonPublicacionesGet.js")
app.get("/json-publicaciones", jsonPublicacionesGet)
 
const misPublicacionesEstados = require("./src/routes/misPublicacionesEstadosPost.js")
app.post("/mis-publicaciones-estados", misPublicacionesEstados)

const eliminarPublicacion = require("./src/routes/eliminarPublicacionPost.js")
app.post("/eliminar-publicacion", eliminarPublicacion)


app.listen(PORT, ()=>{
  console.log(`localhost:${PORT}/inicio`)
  console.log(`localhost:${PORT}/alquileres`)
  console.log(`localhost:${PORT}/publicar`)
  console.log(`localhost:${PORT}/mis-publicaciones`)

  console.log(`localhost:${PORT}/acceder`)
  console.log(`localhost:${PORT}/registro`)
  console.log(`localhost:${PORT}/reestablecer`)
})

