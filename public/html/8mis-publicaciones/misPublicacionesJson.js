

const url2 = 'http://localhost:3000/json-publicaciones'
fetch(url2)
  .then(response => response.json())  
  .then(data2 => {
    console.log(data2)

    data2.jsonPublicaciones.forEach((a, index) => {

      const id55 = document.getElementById('redireccionar1');
      const div55 = document.createElement('div')
      div55.style.marginBottom = "10px"
      div55.style.position = "relative"
      div55.className = `clase${index}`
      div55.addEventListener('click', function () {
        window.location.href = `/propiedad/${a.link}`
      })

      const fecha = a.createdAt
      const izqFecha = fecha.split("T")[0]

      const precioSimple = a.precio
      const precioAlterado = precioSimple.toLocaleString('es-ES')

      const expensaSimple = a.expensa
      const expensaAlterada = expensaSimple.toLocaleString('es-ES')

      div55.innerHTML = `

  <div class="imagenEInfo" style="height: 220px; width: 100%; cursor: pointer; border-radius: 20px; display: flex;">

    <div style="position: relative; 1width: 100%;">
      <div class="imagen1" style="height: 220px; width: 350px; position: relative;">
        <span class="anterior1" style="position: absolute;" onclick="anterirorImagen(-1)">&#10094</span>    
        <span class="siguiente1" style="position: absolute;" onclick="siguienteImagen(1)">&#10095</span>
        <img src="/uploads/${a.imagenes[0]}" style="position: relative; border-radius: 13px 0 0 13px; 1height: 200px ;1width: 270px;">
      </div>
    </div>


    <div>
      <div class="texto1" style="height: 180px; width: 717px; height: 200px; z-index: 10; 1border: 1px solid red">
        <div class="textoJunto1" style="display: flex; margin-left: var(--separacionImgTxt);">
          <h2 style="margin: 0px; font-size: 26px; margin-top: 14px;">$${precioAlterado}</h2> <h4 class="textoAjuste1" style="1color:rgb(179, 127, 127); font-size: 12px; margin-top: 14px; 1margin-bottom: 6px; line-height: 44px; margin-left: 3px;">+ $${expensaAlterada} de expensas</h4>
        </div>
        <h2 style="margin: 0px; margin-left: var(--separacionImgTxt); font-size: 15px;">${a.direccion} ${a.numero} </h2>    <!--${a.direccion} ${a.piso != "" ? `, Piso ${a.piso}` : ""}-->      <!--if (a.piso) {"Piso ",a.piso} else {""}-->
        <h3 style="margin: 0px; margin-left: var(--separacionImgTxt); font-size: 15px;">${a.ciudad}, ${a.provincia}</h3>

        <h3 style="margin: 0px; margin-left: var(--separacionImgTxt); margin-bottom: 10px; font-size: 11px; overflow-wrap: break-word; height: 14px; overflow: hidden;"> ${a.descripcion} </h3>

        <div style="display: flex; margin-left: var(--separacionImgTxt);"> ${a.area != "" ? `<img src="/8mis-publicaciones/iconos/detalles/004_square_meter.svg" style="width: 17px; height: 17px; position: relative; margin-right: 2px;"> <h3 style="margin: 0px; margin-bottom: 10px; font-size: 14px; margin-right: 10px; line-height: 10px;"> ${a.area} m<sup style="font-size: 10px;">2</sup>` : ""} ${a.dormitorio != "" ? `</h3> <img src="/8mis-publicaciones/iconos/detalles/001_bed.svg" style="width: 17px; height: 17px; position: relative; margin-right: 2px;"> <h3 style="margin: 0px; margin-bottom: 10px; font-size: 14px; margin-right: 10px"> ${a.dormitorio} dormitorio` : ""} </h3> ${a.ambiente != "" ? `<img src="/8mis-publicaciones/iconos/detalles/048_ambience.svg" style="width: 17px; height: 17px; position: relative; margin-right: 2px;"> <h3 style="margin: 0px; margin-bottom: 10px; font-size: 14px; margin-right: 10px"> ${a.ambiente} ambiente` : ""} ${a.edad != "" ? `<h3> <img src="/8mis-publicaciones/iconos/detalles/009_calendar.svg" style="width: 17px; height: 17px; position: relative; margin-right: 2px;"> <h3 style="margin: 0px; margin-bottom: 10px; font-size: 14px; margin-right: 10px"> ${a.edad} años</h3>` : ""} </div>

        <div class="textoIconos1" style="font-size: 12px; display: flex; margin-left: var(--separacionImgTxt);"> <img src="/8mis-publicaciones/iconos/favorito_off.svg" style="width: 20px; position: relative;">  <img src="/8mis-publicaciones/iconos/delete--on.svg" style="width: 20px; margin-left: 10px; margin-right: 10px; position: relative;"> Publicado ${izqFecha}</h4> </div>    <!--<h6>me gusta, corazon</h6> <h6> | ocultar</h6> <h4> | Publicado 25/01/24</h4>     ${a.fecha2}-->

        <div style="margin-left: 80%; 1margin-right: 20px; display: flex; 1position: absolute; z-index: 4000; 1top: 50%; 1right: 50%; pointer-events: auto;"> <p style="margin-right: 6px; line-height: 30px;">Estado: </p> <div id="estadoDisponible${a.id}"  index class="estadoClase${index}" style="line-height: 25px; z-index: 4000; 1position: absolute; width: 200px; height: 30px; pointer-events: auto; background: blue; border-radius: 6px; color: white; display: flex; justify-content: center; line-height: 30px; padding: 0px 10px; 1display: inline-block; white-space: nowrap;" 1onclick="sss()">${a.estado == 1 ? "Disponible" : "No disponible"}</div>  <div id="eliminarPublicacion${a.id}" style="background: red; color: white; border-radius: 6px; 1width: 200px; padding: 2px 8px; margin-left:10px;">Eliminar</div> </div>  
      </div>
    </div>
  </div>

<style>
:root {
--separacionImgTxt: 20px;
}
</style>
`

      function aa() {
        let inicio = 0
        let maximo = 20
        setInterval(() => {
          inicio++
          if (inicio < maximo) {
            for (let i = 0; i < 10; i++) {

              const b = document.getElementById(`estadoDisponible${a.id}`).innerText || null  
              if (b == "No disponible") {
                document.getElementById(`estadoDisponible${a.id}`).style.background = "red"
              }
            }
          }
        }, 100)
      }
      aa()


      div55.querySelector(`#estadoDisponible${a.id}`).addEventListener('click', function (event) {  
        event.stopPropagation()  

        const url = '/mis-publicaciones-estados'
        const data = { id: Number(a.id) };

        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'  
          },
          body: JSON.stringify(data)  
        })
          .then(response => response.json()) 
          .then(data2 => {
            console.log(data2)
            if (data2.estado === false) {
              console.log(data2.estado)
              document.getElementById(`estadoDisponible${a.id}`).style.color = "white" 
              document.getElementById(`estadoDisponible${a.id}`).textContent = "No disponible"
              document.getElementById(`estadoDisponible${a.id}`).style.background = "red"
            }
            if (data2.estado === true) {
              console.log(data2.estado)
              document.getElementById(`estadoDisponible${a.id}`).style.color = "white"  
              document.getElementById(`estadoDisponible${a.id}`).textContent = "Disponible"
              document.getElementById(`estadoDisponible${a.id}`).style.background = "blue"
            }
          })   
          .catch(error => console.log('Error fetch', error))
      })


      div55.querySelector(`#eliminarPublicacion${a.id}`).addEventListener('click', function (event) {  
        event.stopPropagation()

        function mostrarConfirmacion(event) {
          event.stopPropagation()
          document.getElementById("overlay").style.display = "block";
          document.getElementById("overlay2").style.width = "100%";
          document.getElementById("overlay2").style.height = "100%";

          const url3 = new URL(window.location) || null
          url3.searchParams.set("id", a.id)
          window.history.pushState({}, "", url3)
          return
        }
        mostrarConfirmacion(event)
      })
      id55.appendChild(div55);
    });
  })  
  .catch(error => console.log('Error fetch', error))



function cerrarSesion(event) {   
  event.stopPropagation()
  document.getElementById("overlay").style.display = "none";
  const url4 = new URL(window.location.href)   
  const id2 = url4.searchParams.get("id")

  const url = '/eliminar-publicacion'
  const data = { id: Number(id2) };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'  
    },
    body: JSON.stringify(data)  
  })
    .then(response => response.json())   
    .then(data2 => {
      console.log(data2)
      if (data2.Message) {
        window.location.reload()
      }

    })
    .catch(error => console.log('Error fetch', error))

  const url3 = new URL(window.location) || null
  url3.searchParams.set("id", "")
  window.history.pushState({}, "", url3)
  return
}


function ocultarConfirmacion(event) {  
  event.stopPropagation()
  document.getElementById("overlay").style.display = "none";
  const url3 = new URL(window.location) || null
  url3.searchParams.set("id", "")
  window.history.pushState({}, "", url3)

  document.getElementById("overlay2").style.width = "0%";
  document.getElementById("overlay2").style.height = "0%";
  return
}
