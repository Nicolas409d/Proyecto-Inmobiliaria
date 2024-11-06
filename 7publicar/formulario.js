


const precioDepto2 = document.getElementById("precioDepto")
precioDepto2.addEventListener('input', function () {
  let valor = this.value.replace(/\D/g, ''); 
  valor = valor.replace(/\B(?=(\d{3})+(?!\d))/g, '.');  
  this.value = valor   
})


const expensasDepto2 = document.getElementById("expensasDepto")
expensasDepto2.addEventListener('input', function () {
  let valor = this.value.replace(/\D/g, '');
  valor = valor.replace(/\B(?=(\d{3})+(?!\d))/g, '.');  
  this.value = valor  
})


const pisoDepto2 = document.getElementById("pisoDepto")
pisoDepto2.addEventListener("input", () => {
  pisoDepto2.value = pisoDepto2.value.replace(/[^0-9]/g, '')  
})


const areaLugar2 = document.getElementById("areaLugar")
areaLugar2.addEventListener("input", () => {
  areaLugar2.value = areaLugar2.value.replace(/[^0-9]/g, '')  
})


const edadDepto2 = document.getElementById("edadDepto")
edadDepto2.addEventListener("input", () => {
  edadDepto2.value = edadDepto2.value.replace(/[^0-9]/g, '')    
})


