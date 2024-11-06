


function normalizarTexto(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
}

const options = {
  includeScore: true,
  threshold: 0.3,
  keys: ["nombre"],
  getFn: (obj, key) => normalizarTexto(obj[key])
};


const fuse = new Fuse(provinciasJSON.provincias.map(nombre => ({ nombre })), options);

const buscador = document.getElementById('buscador');
const resultado = document.getElementById('resultado');

function filtrarNombres() {
  const textoBuscado = normalizarTexto(buscador.value);
  resultado.innerHTML = ''; 

  const resultados = fuse.search(textoBuscado);

  const maxResultados = 100
  const resultadosLimitados = resultados.slice(0, maxResultados)

  if (resultadosLimitados.length > 0) {
    resultadosLimitados.forEach(({ item }) => {
      const div = document.createElement('div');
      div.textContent = item.nombre;
      div.classList.add('resultado-item'); 
      div.addEventListener('click', () => seleccionarNombre(item.nombre)); 
      resultado.appendChild(div);
    });
  }
}

function seleccionarNombre(nombre) {
  buscador.value = nombre; 
  resultado.innerHTML = ''; 
}

buscador.addEventListener('input', filtrarNombres);

function buscadorCiudad() {
  const buscadorProvincia = document.getElementById("buscador") 

  buscadorProvincia.addEventListener('input', function () {
    setInterval(() => {
      const buscadorProvincia2 = document.getElementById("buscador").value
      if (buscadorProvincia2.includes(",")) { 

        const url3 = new URL(window.location) || null

        const buscadorProvincia3 = buscadorProvincia2.split(", ")[0]
        const buscadorProvincia4 = buscadorProvincia2.split(", ")[1]

        url3.searchParams.set("ciudad", buscadorProvincia3)
        url3.searchParams.set("provincia", buscadorProvincia4)
        window.history.pushState({}, "", url3)

        url3.searchParams.set("pagina", 1)   
        window.history.pushState({}, "", url3)

        localStorage.removeItem("jsonImagenes")  

        filtroInicial()    
        window.location.reload()  
      }
    }, 200)
  })
}
buscadorCiudad()  


function agragaBusqueda() { 
  const url = new URL(window.location.href)    
  const ciudad = url.searchParams.get("ciudad") || null
  const provincia = url.searchParams.get("provincia") || null
  const buscadorProvincia2 = document.getElementById("buscador")
  if (ciudad == null || provincia == null) {
    buscadorProvincia2.value = ""
    return
  }
  const union = ciudad + ", " + provincia
  buscadorProvincia2.value = union
}
agragaBusqueda()
