

const botonLimpia3 = document.getElementById("limpiaHamDorm")
const ttt = document.querySelectorAll('.ggg')
const ttt2 = document.querySelectorAll('.gggb')

botonLimpia3.addEventListener('click', function () {
  ttt.forEach(c => {
    c.style.backgroundColor = 'white';
    c.style.color = 'black';
  })
  ttt2.forEach(c => {
    c.style.backgroundColor = 'white';
    c.style.color = 'black';
  })

  const url3 = new URL(window.location) || null

  url3.searchParams.set("dormitorios", "")
  url3.searchParams.set("ambientes", "")

  window.history.pushState({}, "", url3)

  let ambiDorm2 = JSON.parse(localStorage.getItem("jsonDormAmb")) || null
  ambiDorm2.dormitorio = ""   //null
  ambiDorm2.ambiente = ""
  localStorage.setItem("jsonDormAmb", JSON.stringify(ambiDorm2)) 

  url3.searchParams.set("pagina", 1)
  window.history.pushState({}, "", url3)

  localStorage.removeItem("jsonImagenes")

  filtroInicial()
  window.location.reload()
})


function valorDormAmb() {
  let jsonDormAmb2 = JSON.parse(localStorage.getItem("jsonDormAmb")) || null  

  const valorDormitorios = jsonDormAmb2.dormitorio   
  const valorAmbientes = jsonDormAmb2.ambiente     

  const url3 = new URL(window.location) || null
  url3.searchParams.set("dormitorios", valorDormitorios)
  url3.searchParams.set("ambientes", valorAmbientes)
  window.history.pushState({}, "", url3)

  url3.searchParams.set("pagina", 1) 
  window.history.pushState({}, "", url3)

  localStorage.removeItem("jsonImagenes")

  filtroInicial()     
  window.location.reload()     
}


function botonColor(divs1) {
  const g2 = document.querySelectorAll('.ggg')
  const e2 = document.getElementById(divs1);  

  g2.forEach(b => {
    b.style.backgroundColor = 'white';
    b.style.color = 'black';
  })
  e2.style.backgroundColor = 'red'; 
  e2.style.color = 'white';

  let eb23 = divs1 == "btn1" ? 1 :
    divs1 == "btn2" ? 2 :
      divs1 == "btn3" ? 3 :
        divs1 == "btn4" ? 4 :
          divs1 == "btn5" ? 5 : null

  let ambiDorm = JSON.parse(localStorage.getItem("jsonDormAmb")) || null  

  if (ambiDorm == null) {
    ambiDorm = { dormitorio: null, ambiente: null } 
  }

  ambiDorm.dormitorio = eb23
  localStorage.setItem("jsonDormAmb", JSON.stringify(ambiDorm))   
}


function botonColorb(divs2) {
  const gb2 = document.querySelectorAll('.gggb')
  const eb2 = document.getElementById(divs2);

  gb2.forEach(b => {
    b.style.backgroundColor = 'white';
    b.style.color = 'black';
  })
  eb2.style.backgroundColor = 'red';  
  eb2.style.color = 'white';

  let eb22 = divs2 == "btnb1" ? 1 :
    divs2 == "btnb2" ? 2 :
      divs2 == "btnb3" ? 3 :
        divs2 == "btnb4" ? 4 :
          divs2 == "btnb5" ? 5 : null

  let ambiDorm = JSON.parse(localStorage.getItem("jsonDormAmb")) || null  

  if (ambiDorm == null) {
    ambiDorm = { dormitorio: null, ambiente: null }   
  }

  ambiDorm.ambiente = eb22
  localStorage.setItem("jsonDormAmb", JSON.stringify(ambiDorm)) 
}


window.addEventListener("load", function () {   
  let ambiDorm2 = JSON.parse(localStorage.getItem("jsonDormAmb")) || null
  if (ambiDorm2 === null) { return }

  if (ambiDorm2.ambiente) {
    let ambiDorm3 = ambiDorm2.ambiente == "1" ? "btnb1" :
      ambiDorm2.ambiente == "2" ? "btnb2" :
        ambiDorm2.ambiente == "3" ? "btnb3" :
          ambiDorm2.ambiente == "4" ? "btnb4" :
            ambiDorm2.ambiente == "5" ? "btnb5" : null

    const ambiDorm5 = "'" + ambiDorm3 + "'"   
    const ambiDorm5a = `${ambiDorm3}`
    const ambiDorm6 = String(ambiDorm5a)

    const ambiDorm4 = document.getElementById(ambiDorm6); 
    ambiDorm4.style.backgroundColor = 'red';
    ambiDorm4.style.color = 'white';
  }

  if (ambiDorm2.dormitorio) {
    let ambiDorm3b = ambiDorm2.dormitorio == "1" ? "btn1" :
      ambiDorm2.dormitorio == "2" ? "btn2" :
        ambiDorm2.dormitorio == "3" ? "btn3" :
          ambiDorm2.dormitorio == "4" ? "btn4" :
            ambiDorm2.dormitorio == "5" ? "btn5" : null

    const ambiDorm5b = `${ambiDorm3b}`
    const ambiDorm6b = String(ambiDorm5b)

    const ambiDorm4b = document.getElementById(ambiDorm6b); 
    ambiDorm4b.style.backgroundColor = 'red';
    ambiDorm4b.style.color = 'white';
  }
})



