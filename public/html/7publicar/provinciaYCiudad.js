

document.getElementById("provincia1").addEventListener("focus", function () {
  const provincia1 = document.getElementById("provincia1")

  provinciasJSON.provincias.forEach((a, index) => {
    const option = document.createElement('option');
    option.textContent = a.nombre;
    provincia1.appendChild(option);
  });

})


document.getElementById("ciudad1").addEventListener("focus", () => {   
  const provincia2 = document.getElementById("provincia1").value
  const ciudad1 = document.getElementById("ciudad1")

  if (!ciudad1) {
    return
  }

  let f = provinciasJSON.provincias.map((a, index) => {
    return a.nombre   
  })

  let index2 = null
  if (f) {
    index2 = f.findIndex(b => b === provincia2)
    document.getElementById("ciudad1").innerHTML = ""

    const option = document.createElement('option');
    option.text = "Ciudad";
    ciudad1.appendChild(option);

    provinciasJSON.provincias[index2].ciudades.forEach((a, index) => {   
      const option = document.createElement('option');
      option.textContent = a[0];

      ciudad1.appendChild(option);
    });
  }
});


let latGuardada = null 
let lonGuardada = null

setInterval(() => {
  const bucleProvincia = document.getElementById("provincia1").value || null 

  if (bucleProvincia) {
    bucleCiudad = document.getElementById("ciudad1").value
  }

  if (bucleProvincia == null) {
    return
  }

  if (!bucleProvincia) {
    return
  }

  let f = provinciasJSON.provincias.map((a, index) => {
    return a.nombre  
  })

  let index3 = null
  if (f) {
    index3 = f.findIndex(b => b == bucleProvincia) 
  }

  let ff = null
  if (index3 || index3 == 0) {
    ff = provinciasJSON.provincias[index3].ciudades.map((a, index) => {
      return a[0]  
    })

  }
  let index4 = null
  if (ff) {
    index4 = ff.findIndex(b => b == bucleCiudad)
  }

  if (index3 && index4 || index3 == 0 || index4 == 0) {     
    let lat = null
    let lat1 = provinciasJSON.provincias[index3].ciudades[index4]

    if (lat1) {
      lat = lat1[1]
    }

    let lon = null
    let lon1 = provinciasJSON.provincias[index3].ciudades[index4]

    if (lon1) {
      lon = lon1[2]
    }

    if (lat == null || lon == null) {
      return
    }

    if (lat != latGuardada || lon != lonGuardada) {  
      latGuardada = lat
      lonGuardada = lon

      const url3 = new URL(window.location) || null
      url3.searchParams.set("latitud", lat)  
      url3.searchParams.set("longitud", lon)
      window.history.pushState({}, "", url3)

    }
  }
}, 2000)
