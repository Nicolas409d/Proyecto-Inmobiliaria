


if (JSON.parse(localStorage.getItem("Imagenes"))) {
  const imagenesStorage2 = JSON.parse(localStorage.getItem("Imagenes")).length

  if (localStorage.getItem("jsonImagenes") === null) {
    const array = {}

    if (imagenesStorage2) {
      for (let i = 0; i <= imagenesStorage2; i++) {
        array[i] = 1;
        localStorage.setItem("jsonImagenes", JSON.stringify(array))
      }
      console.log("array:", array)
    }
  }

}


function filtroInicial() {
  const url = new URL(window.location.href)

  const opcion2 = url.searchParams.get("operacion") || null
  if (opcion2 == null) {
    let dd = document.getElementById("dd")
    dd.textContent = opcion2 === null ? "Operacion" : opcion2

    let hhh = JSON.parse(localStorage.getItem("fitrosConfiguracion")) || null
    hhh.operaciones = null
    hhh.operacionesChecked = null
    localStorage.setItem("fitrosConfiguracion", JSON.stringify(hhh))
  }
  if (opcion2 != null) {
    let dd = document.getElementById("dd")
    dd.textContent = opcion2 === null ? "Operacion" : opcion2
  }

  const propiedad2 = url.searchParams.get("propiedad") || null
  if (propiedad2 == null) {
    let dd2 = document.getElementById("dd2")
    dd2.textContent = propiedad2 === null ? "Propiedad" : propiedad2

    let hhh = JSON.parse(localStorage.getItem("fitrosConfiguracion")) || null
    hhh.propiedad = null
    hhh.operacionesChecked2 = null
    localStorage.setItem("fitrosConfiguracion", JSON.stringify(hhh))
  }
  if (propiedad2 != null) {
    let dd2 = document.getElementById("dd2")
    dd2.textContent = propiedad2 === null ? "Propiedad" : propiedad2
  }

  const precioMinimo2 = url.searchParams.get("precioMinimo") || null
  const precioMaximo2 = url.searchParams.get("precioMaximo") || null

  const dormitorio2 = url.searchParams.get("dormitorios") || null
  const ambiente2 = url.searchParams.get("ambientes") || null

  const ciudad2 = url.searchParams.get("ciudad") || null
  const provincia2 = url.searchParams.get("provincia") || null

  const pagina2 = url.searchParams.get("pagina") || null

  const filtros = { ciudad: ciudad2, provincia: provincia2, operacion: opcion2, propiedad: propiedad2, precioMinimo: precioMinimo2, precioMaximo: precioMaximo2, dormitorio: dormitorio2, ambiente: ambiente2, pagina: pagina2 }

  const url2 = '/filtros'
  fetch(url2, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(filtros)
  })
    .then(response => response.json())
    .then(data2 => {
      console.log(data2)

      window.cantidadPublicacion = data2.cantidad

      const contenedorPadre = document.getElementById('redireccionar1');

      let aa = []
      data2.filtroJsonPublicaciones.forEach((publicacion, index) => {

        const precioOriginal = publicacion.precio
        const precioAlterado = precioOriginal.toLocaleString('es-ES')

        const expensaOriginal = publicacion.expensa
        const expensaAlterado = expensaOriginal.toLocaleString('es-ES')

        const fecha = publicacion.createdAt
        const izqFecha = fecha.split("T")[0]

        aa.push(publicacion.imagenes)

        localStorage.setItem("Imagenes", JSON.stringify(aa))

        const div1 = document.createElement('div');
        div1.classList.add('div1');
        div1.classList.add('imagenEInfo');

        const div2 = document.createElement('div');

        const div3 = document.createElement('div');
        div3.classList.add('div3');
        div3.classList.add('imagen1');
        div3.style.position = "relative"

        const span1 = document.createElement('span');
        span1.classList.add('anterior1');
        span1.innerHTML = `&#10094`;
        span1.onclick = function () {
          anterirorImagen(index);
        }
        span1.style.zIndex = "200"
        span1.style.position = "absolute"

        const span2 = document.createElement('span');
        span2.classList.add('siguiente1');
        span2.innerHTML = `&#10095`;
        span2.onclick = function () {
          siguienteImagen(index);
        }
        span2.style.zIndex = "200"
        span2.style.position = "absolute"

        const img1 = document.createElement('img');
        img1.src = `/uploads/${publicacion.imagenes[0]}`
        img1.id = `imagenId${index}`;
        img1.style.zIndex = "100"
        img1.style.width = "350px"
        img1.style.height = "220px"
        img1.style.position = "relative"
        img1.onclick = function () {
          window.location.href = `/propiedad/${publicacion.link}`
        }

        const p22 = document.createElement('p');
        p22.style.position = "absolute";
        p22.style.zIndex = "2000"
        p22.style.bottom = "0px";
        p22.style.left = "0px";
        p22.style.background = "rgba(255,255,255,0.8)";
        p22.style.color = "rgba(0,0,0,0.7)";
        p22.style.padding = "4px 10px";
        p22.style.borderRadius = "0px 8px 0px 20px"
        p22.style.width = "20px";
        p22.style.fontSize = "14px"
        p22.style.fontWeight = "bold";

        (function aa() {
          setInterval(() => {
            let arrayImagenes5 = JSON.parse(localStorage.getItem("Imagenes"))
            let array5 = JSON.parse(localStorage.getItem("jsonImagenes"))

            p22.textContent = `${array5[index]}/${arrayImagenes5[index].length}`
          }, 200)
        })()

        div1.appendChild(div2);
        div2.appendChild(div3);
        div3.appendChild(span1);
        div3.appendChild(span2);
        div3.appendChild(img1);

        div3.appendChild(p22);

        const diva1 = document.createElement('div');
        diva1.id = 'texto1';
        diva1.onclick = function () {
          window.location.href = `/propiedad/${publicacion.link}`
        }

        const diva2 = document.createElement('div');
        diva2.classList.add('diva2');
        diva2.classList.add('texto1');

        const diva3 = document.createElement('div');
        diva3.classList.add('diva3');
        diva3.classList.add('textoJunto1');

        const h2a1 = document.createElement('h2');
        h2a1.classList.add('h2a1');
        h2a1.textContent = `$${precioAlterado}`
        const h4a1 = document.createElement('h4');
        h4a1.classList.add('textoAjuste1');
        h4a1.textContent = `+ $${expensaAlterado} de expensas`

        const h2a2 = document.createElement('h2');
        h2a2.classList.add('h2a2');
        h2a2.textContent = `${publicacion.direccion} ${publicacion.numero}`

        const h3a1 = document.createElement('h3');
        h3a1.classList.add('h3a1');
        h3a1.textContent = `${publicacion.ciudad}, ${publicacion.provincia}`

        const diva4 = document.createElement('div');

        const h3a2 = document.createElement('h3');
        h3a2.classList.add('h3a2');

        const imgb1 = document.createElement('img');
        imgb1.src = "/5alquileres/iconos/detalles/004_square_meter.svg";
        imgb1.style.width = "17px"
        imgb1.style.height = "17px"
        imgb1.style.position = "relative"
        const p2 = document.createElement('p');
        p2.textContent = `${publicacion.area} m`
        p2.style.position = "relative";
        p2.style.top = "-1px";
        p2.style.marginLeft = "2px"
        p2.style.fontSize = "15px"
        p2.style.display = "flex"
        const p20 = document.createElement('p');
        p20.style.fontSize = "10px"
        p20.textContent = `2`

        const imgb2 = document.createElement('img');
        imgb2.src = "/5alquileres/iconos/detalles/001_bed.svg";
        imgb2.style.width = "17px"
        imgb2.style.height = "17px"
        imgb2.style.marginLeft = "14px"
        imgb2.style.position = "relative"
        const p3 = document.createElement('p');
        p3.textContent = `${publicacion.dormitorio} dormitorio`
        p3.style.position = "relative";
        p3.style.top = "-1px";
        p3.style.marginLeft = "2px"
        p3.style.fontSize = "15px"

        const imgb3 = document.createElement('img');
        imgb3.src = "/5alquileres/iconos/detalles/048_ambience.svg";
        imgb3.style.width = "17px"
        imgb3.style.height = "17px"
        imgb3.style.marginLeft = "14px"
        imgb3.style.position = "relative"
        const p4 = document.createElement('p');
        p4.textContent = `${publicacion.ambiente} ambiente`
        p4.style.position = "relative";
        p4.style.top = "-1px";
        p4.style.marginLeft = "2px"
        p4.style.fontSize = "15px"

        const imgb4 = document.createElement('img');
        imgb4.src = "/5alquileres/iconos/detalles/009_calendar.svg";
        imgb4.style.width = "17px"
        imgb4.style.height = "17px"
        imgb4.style.marginLeft = "14px"
        imgb4.style.position = "relative"
        const p5 = document.createElement('p');
        p5.textContent = `${publicacion.edad} años`
        p5.style.position = "relative";
        p5.style.top = "-1px";
        p5.style.marginLeft = "2px"
        p5.style.fontSize = "15px"

        const h3a3 = document.createElement('h3');
        h3a3.classList.add('h3a3');
        h3a3.textContent = publicacion.descripcion

        h3a3.style.overflowWrap = "break-word"
        h3a3.style.textOverflow = "ellipsis" 
        h3a3.style.height = "14px" 
        h3a3.style.overflow = "hidden"

        const diva5 = document.createElement('div');
        diva5.classList.add('diva3');
        diva5.classList.add('textoIconos1');

        const imgc1 = document.createElement('img');
        imgc1.src = "/5alquileres/iconos/favorito_off.svg";
        imgc1.style.width = "20px"
        imgc1.style.height = "20px"
        imgc1.style.position = "relative"

        const imgc2 = document.createElement('img');
        imgc2.src = "/5alquileres/iconos/delete--on.svg";
        imgc2.classList.add('imgc2');
        imgc2.style.position = "relative"

        const p1 = document.createElement('p');
        p1.textContent = `Publicado ${izqFecha}`
        p1.style.position = "relative";
        p1.style.top = "2px";
        p1.style.fontSize = "12px"

        diva1.appendChild(diva2);
        diva2.appendChild(diva3);
        diva3.appendChild(h2a1);
        diva3.appendChild(h4a1);
        diva2.appendChild(h2a2);
        diva2.appendChild(h3a1);

        diva2.appendChild(h3a3);

        diva2.appendChild(diva4);
        diva4.appendChild(h3a2);
        h3a2.appendChild(imgb1);
        h3a2.appendChild(p2);
        h3a2.appendChild(imgb2);
        h3a2.appendChild(p3);
        h3a2.appendChild(imgb3);
        h3a2.appendChild(p4);
        h3a2.appendChild(imgb4);
        h3a2.appendChild(p5);
        p2.appendChild(p20);

        diva2.appendChild(diva5);
        diva5.appendChild(imgc1);
        diva5.appendChild(imgc2);
        diva5.appendChild(p1);

        div1.appendChild(diva1);

        contenedorPadre.appendChild(div1);
      })
    })
    .catch(error => console.log('Error fetch', error))
}
filtroInicial()
