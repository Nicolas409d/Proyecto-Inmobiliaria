


localStorage.removeItem("jsonImagenes")  

if (localStorage.getItem("jsonImagenes") === null) {
  const array = {}

  for (let i = 0; i < 10; i++) {
    array[i] = 1;
  }
  localStorage.setItem("jsonImagenes", JSON.stringify(array)) 
}


document.addEventListener("DOMContentLoaded", () => {
  const array5 = JSON.parse(localStorage.getItem("jsonImagenes"))
  const imagenesStorage2 = JSON.parse(localStorage.getItem("Imagenes"))

  function aa(imagenesStorage2, array5) {
    if (document.getElementById("imagenId0") !== null) {

      const imagen2220 = document.getElementById(`imagenId0`)
      if (imagen2220) {
        imagen2220.src = `/uploads/${imagenesStorage2[0][eval(array5[0] - 1)]}`
      }

      const imagen2221 = document.getElementById(`imagenId1`)
      if (imagen2221) {
        imagen2221.src = `/uploads/${imagenesStorage2[1][Number(array5[1] - 1)]}`
      }

      const imagen2222 = document.getElementById(`imagenId2`)
      if (imagen2222) {
        imagen2222.src = `/uploads/${imagenesStorage2[2][Number(array5[2] - 1)]}`
      }

      const imagen2223 = document.getElementById(`imagenId3`)
      if (imagen2223) {
        imagen2223.src = `/uploads/${imagenesStorage2[3][Number(array5[3] - 1)]}`
      }

      const imagen2224 = document.getElementById(`imagenId4`)
      if (imagen2224) {
        imagen2224.src = `/uploads/${imagenesStorage2[4][Number(array5[4] - 1)]}`
      }

      const imagen2225 = document.getElementById(`imagenId5`)
      if (imagen2225) {
        imagen2225.src = `/uploads/${imagenesStorage2[5][Number(array5[5] - 1)]}`
      }

      const imagen2226 = document.getElementById(`imagenId6`)
      if (imagen2226) {
        imagen2226.src = `/uploads/${imagenesStorage2[6][Number(array5[6] - 1)]}`
      }

      const imagen2227 = document.getElementById(`imagenId7`)
      if (imagen2227) {
        imagen2227.src = `/uploads/${imagenesStorage2[7][eval(array5[7] - 1)]}`
      }

      const imagen2228 = document.getElementById(`imagenId8`)
      if (imagen2228) {
        imagen2228.src = `/uploads/${imagenesStorage2[8][eval(array5[8] - 1)]}`
      }

      const imagen2229 = document.getElementById(`imagenId9`)
      if (imagen2229) {
        imagen2229.src = `/uploads/${imagenesStorage2[9][eval(array5[9] - 1)]}`
      }

      const imagen22210 = document.getElementById(`imagenId10`)
      if (imagen22210) {
        imagen22210.src = `/uploads/${imagenesStorage2[10][eval(array5[10] - 1)]}`
      }
    }
  }


  let contador = 0
  const max = 10
  setInterval(() => {
    contador++
    if (contador < max) {
      aa(imagenesStorage2, array5)
    }
  }, 100)
})


const imagenesStorage = JSON.parse(localStorage.getItem("Imagenes"))

const imagen22 = document.getElementById("imagenesVarias")
if (imagen22 && imagenesStorage) {
  for (let i = 0; i < imagenesStorage.length; i++) {
    imagen22.src = `/uploads/${imagenesStorage[i][0]}`
  }
}



function siguienteImagen(index) {
  const imagenesStorage = JSON.parse(localStorage.getItem("Imagenes"))
  if (localStorage.getItem("jsonImagenes") === null) {
    const array = {}

    for (let i = 0; i < imagenesStorage.length; i++) {
      array[i] = 1;
    }
    localStorage.setItem("jsonImagenes", JSON.stringify(array))  
  }

  if (localStorage.getItem("jsonImagenes") !== null) {
    const array5 = JSON.parse(localStorage.getItem("jsonImagenes")) 

    if (array5[index] < imagenesStorage[index].length) {
      array5[index] = Number(array5[index]) + 1
      localStorage.setItem("jsonImagenes", JSON.stringify(array5))   
    }
  }


  const array5 = JSON.parse(localStorage.getItem("jsonImagenes"))
  console.log("array5[index]:", array5[index])

  const imagen22 = document.getElementById("imagenesVarias")

  if (array5[index] > 0 && array5[index] < 3) {
    for (let i = 0; i < 3; i++) {
      const img = document.createElement("img")
      img.src = `/uploads/${imagenesStorage[index][i]}`
      imagen22.appendChild(img)
    }
  }

  if (array5[index] >= 3 && array5[index] <= 4) {
    for (let i = 0; i < imagenesStorage[index].length; i++) {
      const img = document.createElement("img")
      img.src = `/uploads/${imagenesStorage[index][i]}`
      imagen22.appendChild(img)
    }
  }

  let imagenVer = `imagenId${index}`
  const imagen222 = document.getElementById(imagenVer)

  const a = Number(array5[index]) - 1
  imagen222.src = `/uploads/${imagenesStorage[index][a]}`

  if (array5[index] !== 1) {
    const a = document.querySelectorAll(".anterior1")
    let b = a[index]
    b.style.display = "block"
  }

  if (array5[index] === imagenesStorage[index].length) {
    const a = document.querySelectorAll(".siguiente1")
    let b = a[index]
    b.style.display = "none"
  }
}


function anterirorImagen(index) {
  const imagenesStorage = JSON.parse(localStorage.getItem("Imagenes"))

  if (localStorage.getItem("jsonImagenes") !== null) {
    const array5 = JSON.parse(localStorage.getItem("jsonImagenes"))

    if (array5[index] <= imagenesStorage[index].length && Number(array5[index] - 1) >= 1) {
      array5[index] = Number(array5[index]) - 1
      localStorage.setItem("jsonImagenes", JSON.stringify(array5))
    }

    if (array5[index] === 1) {
      const a = document.querySelectorAll(".anterior1")
      let b = a[index]
      b.style.display = "none"
    }

    if (array5[index] !== imagenesStorage[index].length) {
      const a = document.querySelectorAll(".siguiente1")
      let b = a[index]
      b.style.display = "block"
    }
  }

  const array5 = JSON.parse(localStorage.getItem("jsonImagenes"))
  let imagenVer = `imagenId${index}`
  const imagen222 = document.getElementById(imagenVer)

  const a = Number(array5[index]) - 1
  imagen222.src = `/uploads/${imagenesStorage[index][a]}`
}


let contador2 = 0
const max2 = 3

setInterval(() => {
  const array5 = JSON.parse(localStorage.getItem("jsonImagenes"))

  if (contador2 < max2) {
    contador2++
    for (let i = 0; i < 10; i++) {
      if (array5[i] === 1) {
        const a = document.querySelectorAll(".anterior1")
        const b = a[i]
        if (b) {
          b.style.display = "none"
        }
      }
    }
  }
}, 100)


let contador3 = 0
const max3 = 10

document.addEventListener("load", () => {
  setInterval(() => {

    const array5 = JSON.parse(localStorage.getItem("jsonImagenes"))
    const imagenesStorage = JSON.parse(localStorage.getItem("Imagenes"))

    if (contador3 < max3) {
      contador3++
      for (let i = 0; i < 10; i++) {  
        if (array5) {
          if (imagenesStorage) {
            if (array5[i] === imagenesStorage[i].length) {
              const a = document.querySelectorAll(".siguiente1")
              const b = a[i]
              if (b) {
                b.style.display = "none"
              }
            }
          }
        }
      }
    }
  }, 100)
})


