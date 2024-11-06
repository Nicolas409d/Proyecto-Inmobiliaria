

let operacion2 = JSON.parse(localStorage.getItem("fitrosConfiguracion")) || null
const hhh = {
  "operaciones": null,
  "propiedad": null,
  "operacionesChecked": null,
  "operacionesChecked2": null,
}

if (!operacion2) {
  localStorage.setItem("fitrosConfiguracion", JSON.stringify(hhh))   
}


function cambiaOperacion() {
  let hhh = JSON.parse(localStorage.getItem("fitrosConfiguracion")) || null  
  let dd = document.getElementById("dd") 

  if (hhh.operaciones === undefined) {
    dd.textContent = "Operacion"
    hhh.operaciones = "Operacion"
    const filtrosopcion = localStorage.setItem("fitrosConfiguracion", JSON.stringify(hhh))   
    return
  }

  if (hhh.operaciones === null) {
    dd.textContent = "Operacion"
    hhh.operaciones = "Operacion"
    const filtrosopcion = localStorage.setItem("fitrosConfiguracion", JSON.stringify(hhh))   
    return
  }

  const dd3 = dd.textContent == null ? "Operacion" :   
    hhh.operaciones == null ? "Operacion" :
      hhh.operaciones == undefined ? "Operacion" :
        hhh.operaciones

  hhh.operaciones = dd3
  const filtrosopcion = localStorage.setItem("fitrosConfiguracion", JSON.stringify(hhh))  

  const url3 = new URL(window.location) || null
  url3.searchParams.set("operacion", dd3)

  console.log("operacion:", dd3)
  window.history.pushState({}, "", url3)   

  url3.searchParams.set("pagina", 1) 
  window.history.pushState({}, "", url3)

  localStorage.removeItem("jsonImagenes")   

  filtroInicial()     
  window.location.reload()
  return
}


function cambiaOperacion2() {
  let hhh = JSON.parse(localStorage.getItem("fitrosConfiguracion")) || null  
  let dd2 = document.getElementById("dd2")

  if (hhh.propiedad === undefined) {
    dd2.textContent = "Propiedad"
    hhh.propiedad = "Propiedad"
    const filtrosopcion = localStorage.setItem("fitrosConfiguracion", JSON.stringify(hhh)) 
    return   
  }
  if (hhh.propiedad === null) {
    dd2.textContent = "Propiedad"
    hhh.propiedad = "Propiedad"
    const filtrosopcion = localStorage.setItem("fitrosConfiguracion", JSON.stringify(hhh))  
    return  
  }

  dd2.textContent = hhh.propiedad !== null ? hhh.propiedad : "Propiedad";
  hhh.propiedad = dd2.textContent
  const filtrosopcion = localStorage.setItem("fitrosConfiguracion", JSON.stringify(hhh))    

  const url3 = new URL(window.location) || null
  url3.searchParams.set("propiedad", dd2.textContent)

  window.history.pushState({}, "", url3)    

  url3.searchParams.set("pagina", 1) 
  window.history.pushState({}, "", url3)

  localStorage.removeItem("jsonImagenes")   

  filtroInicial()  
  window.location.reload()  
  return
}


function localstorageMostrar(dept, check) {
  let hhh = JSON.parse(localStorage.getItem("fitrosConfiguracion")) || null 
  hhh.operaciones = dept
  hhh.operacionesChecked = check 
  const filtrosopcion = localStorage.setItem("fitrosConfiguracion", JSON.stringify(hhh)) 
  cambiaOperacion()   
}


function localstorageMostrar2(dept, check) {
  let hhh = JSON.parse(localStorage.getItem("fitrosConfiguracion")) || null  
  hhh.propiedad = dept 
  hhh.operacionesChecked2 = check 
  const filtrosopcion = localStorage.setItem("fitrosConfiguracion", JSON.stringify(hhh)) 
  cambiaOperacion2()  
}


let divOpciones55 = document.getElementById("divOpciones1")
let divOpciones66 = document.getElementById("divOpciones2")
let divOpciones77 = document.getElementById("divOpciones3")
let divOpciones88 = document.getElementById("divOpciones4")

const a1 = document.querySelector('.operaciones11')
const b1 = document.querySelector('.propiedad1')
const c1 = document.querySelector('.precio1')
const d1 = document.querySelector('.ambi1')


function mostrarOpcion(divs) {
  const g1 = document.querySelectorAll('.block1')
  const divOpcionesaaa = document.getElementById(divs);  

  if (divOpcionesaaa.style.display === 'block') {
    g1.forEach(a => {
      a.style.display = "none";
    })

    divOpcionesaaa.style.display = "none";
  } else {
    g1.forEach(a => {
      a.style.display = "none";
    })
    divOpcionesaaa.style.display = "block";
    for1()    
    for2()

    let filtro = JSON.parse(localStorage.getItem("fitrosConfiguracion")) || null   
    const opcion2 = document.getElementById(filtro.operacionesChecked) || null
    if (opcion2) {
      opcion2.checked = true;
    }

    const opcion3 = document.getElementById(filtro.operacionesChecked2)
    if (opcion3) {
      opcion3.checked = true;
    }
  }
}


function botonSeleccion(divs3, check) {
  const opcion = document.getElementById(divs3)
  const divOpciones1 = document.getElementById("divOpciones1")  
  const uuu = document.querySelectorAll('.inputSelecion')

  localstorageMostrar2(check, divs3)

  uuu.forEach(a => {
    a.checked = false;
  })
  opcion.checked = true;

  setTimeout(function () {
    window.location.href = "#"
    divOpciones1.style.display = "none"
  }, 200)
}


function botonSeleccion2(divs4, dept) {
  const opcion = document.getElementById(divs4)
  const divOpciones2 = document.getElementById("divOpciones2") 
  const uuu = document.querySelectorAll('.inputSelecion2')

  localstorageMostrar(dept, divs4)

  uuu.forEach(a => {
    a.checked = false;
  })
  opcion.checked = true;   

  setTimeout(function () {
    window.location.href = "#" 
    divOpciones2.style.display = "none"
  }, 200)
}

