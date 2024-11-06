


let div1Clicked = false;
let div2Clicked = false;

function cambiarEstilo(id) {
  const div1 = document.getElementById('div1');
  const div2 = document.getElementById('div2');

  if (id === 'div1' && !div1Clicked) {
    div1.style.backgroundColor = 'blue';
    div1.style.color = 'white';
    div2.style.backgroundColor = 'white';
    div2.style.color = 'black';

    div2.style.boxShadow = '0px 0px 0px rgba(0, 0, 0)';
    div1.style.boxShadow = '0px 0px 2px rgba(0, 0, 0)';
    div1Clicked = true;
    div2Clicked = false;

    const seleccionOperacion = { "seleccion": "div1" }  
    localStorage.setItem("seleccion", JSON.stringify(seleccionOperacion))   
  } else if (id === 'div2' && !div2Clicked) {
    div2.style.backgroundColor = 'blue';
    div2.style.color = 'white';
    div1.style.backgroundColor = 'white';
    div1.style.color = 'black';

    div1.style.boxShadow = '0px 0px 0px rgba(0, 0, 0)';
    div2.style.boxShadow = '0px 0px 2px rgba(0, 0, 0)';
    div2Clicked = true;
    div1Clicked = false;

    const seleccionOperacion = { "seleccion": "div2" }
    localStorage.setItem("seleccion", JSON.stringify(seleccionOperacion))  
  }
}


document.getElementById("buscar2").addEventListener('click', () => {

  const input3 = document.getElementById("input2").value || null    

  if (input3 === null) {
    const mensaje2 = document.getElementById("mensaje2")
    mensaje2.style.display = "block";
    mensaje2.style.marginLeft = "20px";

    setTimeout(() => {
      mensaje2.style.marginLeft = "5px";
    }, 100)
  }
})


let seleccion2 = JSON.parse(localStorage.getItem("seleccion")) || null    

if (seleccion2 === null) {
  const seleccionOperacion = { "seleccion": "div1" }  
  localStorage.setItem("seleccion", JSON.stringify(seleccionOperacion)) 
}

if (seleccion2.seleccion !== null) {
  cambiarEstilo(seleccion2.seleccion) 
} else {
}

document.getElementById("buscar2").addEventListener('click', () => {
  let seleccion4 = JSON.parse(localStorage.getItem("seleccion")) || null 
  const seleccion3 = seleccion4.seleccion  
  const seleccion5 = seleccion3 === "div1" ? "Alquiler" :
    seleccion3 === "div2" ? "Comprar" : null;

  const selec = document.getElementById("selec2").value || null   
  const input2 = document.getElementById("input2").value || null   

  if (!input2.includes(",")) {
    const mensaje2 = document.getElementById("mensaje2")
    mensaje2.style.display = "block";
    mensaje2.style.marginLeft = "20px";

    setTimeout(() => {
      mensaje2.style.marginLeft = "5px";
    }, 100)
    return
  }

  const buscadorProvincia3 = input2.split(", ")[0]
  const buscadorProvincia4 = input2.split(", ")[1]

  const redireccionar = `/alquileres?&operacion=${seleccion5}&propiedad=${selec}&ciudad=${buscadorProvincia3}&provincia=${buscadorProvincia4}`

  localStorage.removeItem("fitrosConfiguracion")

  window.location.href = redireccionar
})

