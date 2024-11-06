


function paginacion11(num3) {
  const paginacion11 = document.getElementById("paginacion1")

  estado = true   
  setInterval(() => {
    if (estado && window.cantidadPublicacion) {
      estado = false

      let contador = 0
      for (let i = 0; i < 100; i++) {
        let a = window.cantidadPublicacion - 5 * (i)
        if (a > 0) {
          contador++
        } else if (a <= 0) {
          break
        }
      }
      let uuu = []
      for (let i = 0; i < contador; i++) {
        uuu.push(i + 1)
      }

      const url = new URL(window.location.href)
      const pagina2 = url.searchParams.get("pagina") || 1

      let html2 = '';
      uuu.forEach((a, index) => {  

        if (a == pagina2) {
          const pagina2 = url.searchParams.get("pagina") || 1
          html2 += `
    <div style="padding: 2px 8px; border-radius: 8px; border: 2px solid rgba(0,0,255,0.2); user-select: none; cursor: pointer; margin-left: 2px; margin-right: 2px; width: 20px; text-align: center;" onclick="paginacionLink(${pagina2})">${pagina2}</div>
    `
        } else {
          html2 += `
    <div id="paginacion4" style="1margin: auto; position: relative; top: 4px; border-radius: 8px; margin-left: 8px; margin-right: 8px; color: rgba(128,128,128,0.9); user-select: none; cursor: pointer; width: 30px; height: 30px;text-align: center; 2padding: 20px; 1line-height: -90px;" onclick="paginacionLink(${Number(index + 1)})">${Number(index + 1)}</div>
    `
        }
        paginacion11.innerHTML = html2
      })
    }
  }, 200)


}
function paginacionLink(num4) {
  const url3 = new URL(window.location) || 1
  url3.searchParams.set("pagina", Number(num4))
  window.history.pushState({}, "", url3)   

  const url = new URL(window.location.href)
  const pagina2 = url.searchParams.get("pagina") || null

  localStorage.removeItem("jsonImagenes")   

  paginacion11(pagina2)
  window.location.reload()
}


const url = new URL(window.location.href)
const pagina2 = url.searchParams.get("pagina") || 1

const url3 = new URL(window.location) || 1
url3.searchParams.set("pagina", pagina2)
window.history.pushState({}, "", url3)   

document.addEventListener("load", paginacion11(pagina2))    

