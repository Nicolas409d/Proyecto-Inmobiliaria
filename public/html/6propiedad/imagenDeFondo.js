

localStorage.removeItem("ImagenesEjs") 

document.getElementsByClassName("anterior1")[0].style.display = "none"

const imagen11 = document.querySelector('.imagen1')  
const imagen22 = imagen11.querySelector('img')

let inicio2 = 0
let maximo2 = 2
setInterval(() => {
  if (maximo2 > inicio2) {
    inicio2++
    const a = document.getElementById("valorEjs")
    const b = a.getAttribute("valor22")  
 
    const array = b.split(",")
    let g = []

    for (let i = 0; i < array.length; i++) {
      g.push(array[i])
    }
    localStorage.setItem("ImagenesEjs", JSON.stringify(g)) 
    aa()
    bb()
  }
}, 100)


function aa() {
  const imagenesDeEjs = JSON.parse(localStorage.getItem("ImagenesEjs"))
  for (let i = 0; i < imagenesDeEjs.length; i++) {
    document.getElementById("imagenesOcultasDescargadas").src = imagenesDeEjs[i]
  }
}


let sumando1 = 1
function siguienteImagen() {
  const imagenesDeEjs = JSON.parse(localStorage.getItem("ImagenesEjs"))  
  let imagenesTotales = imagenesDeEjs.length

  if (sumando1 < imagenesTotales) {
    sumando1 += 1
  }

  if (sumando1 <= imagenesTotales) {
    imagen22.src = imagenesDeEjs[sumando1 - 1]

    if (sumando1 == imagenesTotales) {    
      document.getElementsByClassName("siguiente1")[0].style.display = "none"
    }

    if (sumando1 != 1) {   
      document.getElementsByClassName("anterior1")[0].style.display = "block"
    }

    numeroActual1 = sumando1 + ' / ' + imagenesTotales   
    imprimimeNumero1 = document.getElementById('numeroMostrar1')
    imprimimeNumero1.innerHTML = numeroActual1
  } else {
  }
}


function bb() {
  const imagenesDeEjs = JSON.parse(localStorage.getItem("ImagenesEjs")) 
  let imagenesTotales = imagenesDeEjs.length
  numeroActual1 = 1 + ' / ' + imagenesTotales  
  imprimimeNumero1 = document.getElementById('numeroMostrar1')
  imprimimeNumero1.innerHTML = numeroActual1
}


function anterirorImagen() {
  const imagenesDeEjs = JSON.parse(localStorage.getItem("ImagenesEjs"))   
  let imagenesTotales = imagenesDeEjs.length
  if (sumando1 > 1) {
    sumando1 += -1
  }

  if (sumando1 <= imagenesTotales && sumando1 >= 1) {
    imagen22.src = imagenesDeEjs[sumando1 - 1]
    numeroActual1 = sumando1 + ' / ' + imagenesTotales  
    imprimimeNumero1 = document.getElementById('numeroMostrar1')
    imprimimeNumero1.innerHTML = numeroActual1

    if (sumando1 != imagenesTotales) {  
      document.getElementsByClassName("siguiente1")[0].style.display = "block"
    }

    if (sumando1 == 1) {
      document.getElementsByClassName("anterior1")[0].style.display = "none"
    }
  }
}


document.getElementById('imagenVisible1').addEventListener('click', function () {
  document.getElementById('imagenVista1').style.display = 'flex';
  document.body.style.overflow = 'hidden';    
  document.getElementById('menuBtn2').style.pointerEvents = 'none'   
  document.getElementById('textoPublicar').style.pointerEvents = 'none'
  document.getElementById('textoPublicar').style.opacity = '0'
  document.querySelector('.nav').classList.add('active3');    
  document.querySelector('.nav').classList.remove('active');  
  isOpen = false     //!!!!!
})


document.getElementById('botonX').addEventListener('click', function () {
  document.getElementById('imagenVista1').style.display = 'none';    
  document.body.style.overflow = 'auto';

  document.getElementById('menuBtn2').style.pointerEvents = 'auto'
  document.getElementById('textoPublicar').style.pointerEvents = 'auto'
  document.getElementById('textoPublicar').style.opacity = '100'
})


document.addEventListener('keydown', function () {
  if (event.key === 'Escape') {
    document.getElementById('imagenVista1').style.display = 'none';
  }
  document.getElementById('menuBtn2').style.pointerEvents = 'auto'
  document.getElementById('textoPublicar').style.pointerEvents = 'auto'
  document.getElementById('textoPublicar').style.opacity = '100'
});


const imagen1N = document.getElementById('imagenVista1');
document.addEventListener('keydown', function (event) {
  document.getElementById('textoPublicar').style.pointerEvents = 'none'
  document.getElementById('textoPublicar').style.opacity = '0'

  if (imagen1N.style.display === 'flex') {
    if (event.key === 'ArrowLeft') {
      anterirorImagen(-1);
    } else if (event.key === 'ArrowRight') {
      siguienteImagen(1);
    }
  }
})                  
