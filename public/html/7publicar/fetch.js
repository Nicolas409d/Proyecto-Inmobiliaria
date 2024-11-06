


const button = document.getElementById("button")

button.addEventListener('click', function () {   

  const csurf = document.getElementById("csurf").value.trim() || null

  const precioDepto = document.getElementById("precioDepto").value.trim() || null
  const expensasDepto = document.getElementById("expensasDepto").value.trim() || null

  const provinciaDepto = document.getElementById("provincia1").value.trim() || null
  const ciudadDepto = document.getElementById("ciudad1").value.trim() || null
  const direccionDepto = document.getElementById("direccionDepto").value.trim() || null
  const pisoDepto = document.getElementById("pisoDepto").value.trim() || null

  const descripcionDepto = document.getElementById("descripcionDepto").value.trim() || null

  const ambienteDepto = document.getElementById("ambienteDepto").value.trim() || null

  const dormitorioDepto = document.getElementById("dormitorioDepto").value.trim() || null

  const bañosDepto = document.getElementById("bañosDepto").value.trim() || null

  const areaLugar = document.getElementById("areaLugar").value.trim() || null

  const edadDepto = document.getElementById("edadDepto").value.trim() || null

  const operacionDepto = document.getElementById("operacionDepto").value.trim() || null

  const viviendaDepto = document.getElementById("viviendaDepto").value.trim() || null


  const latitudDepto = document.getElementById("latitud").textContent.trim() || null    
  const longitudDepto = document.getElementById("longitud").textContent.trim() || null


  const imagenes1 = document.getElementById("imagenes").files[0]  
  const imagenes2 = document.getElementById("imagenes").files[1]
  const imagenes3 = document.getElementById("imagenes").files[2]
  const imagenes4 = document.getElementById("imagenes").files[3]
  const imagenes5 = document.getElementById("imagenes").files[4]
  const imagenes6 = document.getElementById("imagenes").files[5]
  const imagenes7 = document.getElementById("imagenes").files[6]
  const imagenes8 = document.getElementById("imagenes").files[7]
  const imagenes9 = document.getElementById("imagenes").files[8]
  const imagenes10 = document.getElementById("imagenes").files[9]


  const jsonFormulario = {
    "precio": precioDepto,
    "expensa": expensasDepto,
    "provincia": provinciaDepto,
    "ciudad": ciudadDepto,
    "direccion": direccionDepto,
    "piso": pisoDepto,
    "descripcion": descripcionDepto,
    "ambiente": ambienteDepto,
    "dormitorio": dormitorioDepto,
    "banos": bañosDepto,
    "area": areaLugar,
    "edad": edadDepto,
    "operacion": operacionDepto,
    "vivienda": viviendaDepto,
    "latitud": latitudDepto,
    "longitud": longitudDepto,
  }


  const formData = new FormData()
  formData.append("datos", JSON.stringify(jsonFormulario))   
  formData.append("image", imagenes1)
  formData.append("image", imagenes2)
  formData.append("image", imagenes3)
  formData.append("image", imagenes4)
  formData.append("image", imagenes5)
  formData.append("image", imagenes6)
  formData.append("image", imagenes7)
  formData.append("image", imagenes8)
  formData.append("image", imagenes9)
  formData.append("image", imagenes10)


  const url = '/publicar'
  const responde = fetch(url, {
    method: 'POST',
    headers: {
      'csurf': csurf
    },
    body: formData,
  })
    .then(response => response.json())
    .then(data2 => {
      console.log(data2)

      if (data2.Message) {
        console.log("data2.Message:", data2.Message)
        const container = document.getElementById("mensajeConfirmacion")
        container.style.color = "blue"
        container.style.fontSize = "20px"
        container.style.padding = "0px 0px 30px 0px"
        container.innerText = data2.Message
        setTimeout(() => {
          window.location.href = "/mis-publicaciones"
        }, 1500)
      }

      if (data2.Message2) {
        const container = document.getElementById("mensajeConfirmacion")
        container.style.color = "blue"
        container.style.fontSize = "20px"
        container.style.padding = "0px 0px 30px 0px"
        container.innerText = data2.Message2
      }
    })
    .catch(error => console.log('Error fetch', error))
})
