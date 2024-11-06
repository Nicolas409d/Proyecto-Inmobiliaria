
const inicioPost = (req, res) => {
  const { seleccion, opcion, buscador } = req.body.key
  res.send({ redirect: `/alquileres?seleccion=${seleccion}&opcion=${opcion}&buscador=${buscador}` })   
}

module.exports = inicioPost
