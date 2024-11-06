

document.getElementById("botonEnviar").addEventListener("click", () => {

  const valorEmail = document.getElementById("idInputTransp112").value

  const url = '/proceso-de-reestablecer'
  const data = { email: valorEmail };
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

      if (data2.message) {
        document.getElementById("message").textContent = data2.message
      }

      if (data2.link) {
        window.location.href = data2.link
      }

    })
    .catch(error => console.log('Error fetch', error))
})