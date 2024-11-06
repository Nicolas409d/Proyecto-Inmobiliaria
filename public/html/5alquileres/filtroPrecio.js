

const inputPuntos = document.getElementById("opciones3a")
inputPuntos.addEventListener('input', function () {
  let valor = this.value.replace(/\D/g, ''); 
  valor = valor.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); 
  this.value = valor  
})


const inputPuntosb = document.getElementById("opciones3bb")
inputPuntosb.addEventListener('input', function () {
  let valor = this.value.replace(/\D/g, '');  
  valor = valor.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); 
  this.value = valor 
})


const botonLimpia2 = document.getElementById("inputLimpia2")
botonLimpia2.addEventListener('click', function () {
  inputPuntos.value = ""
  inputPuntosb.value = ""
  const url3 = new URL(window.location) || null

  url3.searchParams.set("precioMinimo", "")
  url3.searchParams.set("precioMaximo", "")   
  window.history.pushState({}, "", url3)

  url3.searchParams.set("pagina", 1)
  window.history.pushState({}, "", url3)

  localStorage.removeItem("jsonImagenes")  
  filtroInicial()   
  window.location.reload()  
})


function precioEnviar() {
  const valorMinimo = document.getElementById("opciones3a").value.trim() || null
  const valorMaximo = document.getElementById("opciones3bb").value.trim() || null

  const url3 = new URL(window.location) || null
  if (valorMinimo) {
    const valorMinimo2 = valorMinimo.replace(/\./g, "") || null
    url3.searchParams.set("precioMinimo", valorMinimo2)
  }

  if (valorMaximo) {
    const valorMaximo2 = valorMaximo.replace(/\./g, "") || null
    console.log("valorMinimo2:", valorMaximo2)
    url3.searchParams.set("precioMaximo", valorMaximo2)
  }

  if (valorMaximo == null) {   
    url3.searchParams.set("precioMaximo", "")
  }

  if (valorMinimo == null) {
    url3.searchParams.set("precioMinimo", "")
  }

  window.history.pushState({}, "", url3)  

  filtroInicial() 
  window.location.reload()  
}


function permanentePrecio() {
  const url = new URL(window.location.href)
  const precioMinimo2 = url.searchParams.get("precioMinimo")
  const precioMaximo2 = url.searchParams.get("precioMaximo")

  if (precioMinimo2) {
    let precioMinimo3 = precioMinimo2.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    const precioMinimo = document.getElementById("opciones3a")
    precioMinimo.value = precioMinimo3 == null ? "" : (precioMinimo3 == "" ? "" : precioMinimo3)
  }

  if (precioMaximo2) {
    let precioMaximo3 = precioMaximo2.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    const precioMaximo = document.getElementById("opciones3bb")
    precioMaximo.value = precioMaximo3 == null ? "" : (precioMaximo3 == "" ? "" : precioMaximo3)
  }
}
permanentePrecio()
