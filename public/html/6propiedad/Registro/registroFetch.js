

document.getElementById("botonEnviar1").addEventListener('click', () => {

  const email = document.getElementById("idInputTransp112").value || null

  const contrasena = document.getElementById("idInputTransp112b").value || null

  const mensaje = document.getElementById("mensajeCorreo")
  const mensaje2 = document.getElementById("mensajeContrasena")
  mensaje2.innerHTML = ""
  mensaje.innerHTML = ""


  const url = '/sesion'
  const data = { email: email, contrasena: contrasena };
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
      if (data2.errors) {
        data2.errors.forEach(a => {
          mensaje2.innerHTML += a.msg2 == undefined ? "" : a.msg2 + "<br>"
        })
        data2.errors.forEach(b => {
          mensaje.innerHTML += b.msg == undefined ? "" : b.msg + "<br>"
        })
      }

      if (data2.mensaje) {
        const mostrarRegistro2 = document.getElementById('registro2')
        mostrarRegistro2.style.display = 'none';  
        location.href = "/inicio"
      }

      document.getElementById('mensaje22').innerText = " "
      if (data2.mensaje2) {   
        const mostrarmensaje2 = document.getElementById('mensaje22')
        setTimeout(() => {
          mostrarmensaje2.innerText += data2.mensaje2   
        }, 200)
      }
    })
    .catch(error => console.log('Error fetch', error))
})

