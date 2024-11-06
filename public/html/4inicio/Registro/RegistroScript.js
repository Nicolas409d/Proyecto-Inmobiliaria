

document.getElementById('idInputTransp112').addEventListener('click', function () { 
  document.getElementById('idInputTransp11').style.lineHeight = 30 + 'px';  
  document.getElementById('idInputTransp11').style.fontSize = 12 + 'px';
})

document.getElementById('idInputTransp112b').addEventListener('click', function () { 
  document.getElementById('idInputTransp11b').style.lineHeight = 30 + 'px';
  document.getElementById('idInputTransp11b').style.fontSize = 12 + 'px';
})


const mostrarRegistro = document.getElementById('registro1') 
const mostrarRegistro2 = document.getElementById('registro2')
mostrarRegistro.addEventListener('click', function () {
  mostrarRegistro2.style.display = 'block';
})


const emailLleno = document.getElementById('idInputTransp112').value   
if (emailLleno) {
  document.getElementById('idInputTransp11').style.lineHeight = 30 + 'px';   
  document.getElementById('idInputTransp11').style.fontSize = 12 + 'px';
}


const contrasenaLleno = document.getElementById('idInputTransp112b').value  
if (contrasenaLleno) {
  document.getElementById('idInputTransp11').style.lineHeight = 30 + 'px'; 
  document.getElementById('idInputTransp11').style.fontSize = 12 + 'px';
}



