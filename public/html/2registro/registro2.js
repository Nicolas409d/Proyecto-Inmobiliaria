

document.getElementById('idInputTransp112').addEventListener('click', function () {
  document.getElementById('idInputTransp11').style.lineHeight = 30 + 'px';
  document.getElementById('idInputTransp11').style.fontSize = 12 + 'px';
})


document.getElementById('idInputTransp112c').addEventListener('click', function () {
  document.getElementById('idInputTransp11c').style.lineHeight = 30 + 'px';
  document.getElementById('idInputTransp11c').style.fontSize = 12 + 'px';
})


document.getElementById('idInputTransp112b').addEventListener('click', function () {
  document.getElementById('idInputTransp11b').style.lineHeight = 30 + 'px';
  document.getElementById('idInputTransp11b').style.fontSize = 12 + 'px';
})


document.getElementById('idInputTransp112d').addEventListener('click', function () {
  document.getElementById('idInputTransp11d').style.lineHeight = 30 + 'px';
  document.getElementById('idInputTransp11d').style.fontSize = 12 + 'px';
})


function compararInputs() {
  var input1 = document.getElementById("idInputTransp112b").value || null;
  var input2 = document.getElementById("idInputTransp112c").value || null;

  if (input1 === input2) {
    document.getElementById("resultado1").innerText = "Las contraseñas son iguales.";
    document.getElementById("resultado1").style.color = "green";
  } else {
    document.getElementById("resultado1").innerText = "Las contraseñas son diferentes.";
    document.getElementById("resultado1").style.color = "red";
  }
}


const usuario2 = document.getElementById('idInputTransp112d').value
if (usuario2) {
  document.getElementById('idInputTransp11d').style.lineHeight = 30 + 'px';
  document.getElementById('idInputTransp11d').style.fontSize = 12 + 'px';
}

const correo2 = document.getElementById('idInputTransp112').value
if (correo2) {
  document.getElementById('idInputTransp11').style.lineHeight = 30 + 'px';
  document.getElementById('idInputTransp11').style.fontSize = 12 + 'px';
}


const contrasena2 = document.getElementById('idInputTransp112b').value
if (contrasena2) {
  document.getElementById('idInputTransp11b').style.lineHeight = 30 + 'px';
  document.getElementById('idInputTransp11b').style.fontSize = 12 + 'px';
}

const ReContrasena2 = document.getElementById('idInputTransp112c').value
if (ReContrasena2) {
  document.getElementById('idInputTransp11c').style.lineHeight = 30 + 'px';
  document.getElementById('idInputTransp11c').style.fontSize = 12 + 'px';
}


document.getElementById('botonEnviar1').addEventListener('click', function () {
  const a = document.getElementById('idInputTransp112').value.trim() || null
  const b = document.getElementById('idInputTransp112c').value.trim() || null
  const c = document.getElementById('idInputTransp112b').value.trim() || null
  const d = document.getElementById('idInputTransp112d').value.trim() || null
  const value = { "usuario": d, "email": a, "password": c, "passwordComprobacion": b }

  if (d !== null && a !== null && c !== null && b === c) {

    const url = '/registro'
    const data = { "registro": value };
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
        document.getElementById("mensaje").textContent = ""
        if (data2.mensaje) {
          document.getElementById("mensaje").textContent = data2.mensaje
        }
        if (data2.mensaje2) {
          document.getElementById("mensaje").textContent = data2.mensaje2

          setTimeout(() => {
            window.location.href = data2.redirect
          }, 1000)
        }
        if (data2.errors) {
          document.getElementById("mensaje").innerHTML = ""
          data2.errors.forEach(a => {
            document.getElementById("mensaje").innerHTML += a.msg == undefined ? "" : a.msg + "<br>"
            document.getElementById("mensaje").innerHTML += a.msg2 == undefined ? "" : a.msg2 + "<br>"
            document.getElementById("mensaje").innerHTML += a.msg3 == undefined ? "" : a.msg3 + "<br>"
            document.getElementById("mensaje").innerHTML += a.msg4 == undefined ? "" : a.msg4 + "<br>"
          });
        }
      })
      .catch(error => console.log('Error fetch', error))
  }
})



