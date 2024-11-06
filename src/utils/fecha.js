
function fecha2() {
  let a = Math.round(Math.random() * 1E8)

  const now = new Date()

  const anno = now.getFullYear()
  const mes = now.getMonth() + 1
  const dia = now.getDate()
  const horas = now.getHours()
  const minutos = now.getMinutes()
  const segundos = now.getSeconds()

  const fecha = anno + "-" + mes + "-" + dia + "_" + horas + "-" + minutos + "-" + segundos + "_" + a     //.toString.padStart(2,"0")

  const fecha22 = dia + "/" + mes + "/" + anno

  const fechaDesde1970 = now.getTime()

  return { fecha, fecha22, fechaDesde1970 }
}
fecha2()

module.exports = fecha2
