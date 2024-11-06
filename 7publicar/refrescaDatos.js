


let contador2 = 0
setInterval(() => {
  if (contador2 <= 1) {  
    contador2++
    document.getElementById('provincia1').focus();
    document.getElementById('ciudad1').focus();
  }
}, 300)


const url = new URL(window.location.href)
const precio3 = url.searchParams.get("precio") || null
document.getElementById('precioDepto').value = precio3

const expensa3 = url.searchParams.get("expensa") || null
document.getElementById('expensasDepto').value = expensa3

const direccion3 = url.searchParams.get("direccion") || null
document.getElementById('direccionDepto').value = direccion3

const numero3 = url.searchParams.get("numero") || null
document.getElementById('pisoDepto').value = numero3


let contador3 = 0
setInterval(() => {
  if (contador3 <= 2) {
    contador3++
    const url = new URL(window.location.href)
    const provincia3 = url.searchParams.get("provincia") || null
    if (provincia3) {
      document.getElementById('provincia1').value = provincia3
    }

    const ciudad3 = url.searchParams.get("ciudad") || null
    if (ciudad3) {
      document.getElementById('ciudad1').value = ciudad3 
    }
  }
}, 200)


let precioValor = null
let expensasValor = null
let direccionValor = null
let pisoValor = null
setInterval(() => {
  const precioLink = document.getElementById('precioDepto').value
  const expensasLink = document.getElementById('expensasDepto').value
  const direccionLink = document.getElementById('direccionDepto').value
  const numeroLink = document.getElementById('pisoDepto').value


  if (precioLink != precioValor || expensasLink != expensasValor || direccionLink != direccionValor || numeroLink != pisoValor) {     
    precioValor = precioLink
    expensasValor = expensasLink
    direccionValor = direccionLink
    pisoValor = numeroLink

    const url3 = new URL(window.location) || null
    if (precioLink) {
      url3.searchParams.set("precio", precioLink)  
    }
    if (expensasLink) {
      url3.searchParams.set("expensa", expensasLink)
    }
    if (direccionLink) {
      url3.searchParams.set("direccion", direccionLink)
    }
    if (numeroLink) {
      url3.searchParams.set("numero", numeroLink)   
    }
    window.history.pushState({}, "", url3)
  }
}, 200)


let latitudValor = null
let longitudValor = null
setInterval(() => {
  const url = new URL(window.location.href)
  const latitud3 = url.searchParams.get("latitud") || null
  const longitud3 = url.searchParams.get("longitud") || null

  if (latitud3 != latitudValor || longitud3 != longitudValor) {
    latitudValor = latitud3
    longitudValor = longitud3
    document.getElementById('latt').value = latitud3
    document.getElementById('logg').value = longitud3
  }
}, 200)


let valorA2 = null
let valorB2 = null
setInterval(() => {
  const a2 = document.getElementById('latt').value
  const b2 = document.getElementById('logg').value

  if (valorA2 == null || valorB2 == null) {
    valorA2 = a2    
    valorB2 = b2
  }

  if (a2 != valorA2 || b2 != valorB2) {
    valorA2 = a2
    valorB2 = b2

    setTimeout(() => {
      window.location.reload()
    }, 100)
  }
}, 300)


document.getElementById('ciudad1').addEventListener('change', function () {
  const url3 = new URL(window.location) || null
  const ciudad2 = document.getElementById('ciudad1').value
  if (ciudad2) {
    url3.searchParams.set("ciudad", ciudad2)
  }
  window.history.pushState({}, "", url3)
})


document.getElementById('provincia1').addEventListener('change', function () {
  const url3 = new URL(window.location) || null
  const provincia2 = document.getElementById('provincia1').value
  if (provincia2) {
    url3.searchParams.set("provincia", provincia2)
  }
  window.history.pushState({}, "", url3)
})

