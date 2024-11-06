

const registro1 = document.getElementById("registro1")  
const menuBtn2 = document.getElementById("menuBtn2")

const cookies = document.cookie


const cookiesArray = cookies.split(';')

const parte = cookiesArray[0]       

const nombreDeCookie = parte.split("=")[0]

const parte2 = cookiesArray[1]

let nombreDeCookie2 = ""
if (parte2) {
  nombreDeCookie2 = parte2.split("=")[0]
}


if (nombreDeCookie.trim() == "token" || nombreDeCookie2.trim() == "token") {
  registro1.style.display = "none";
  menuBtn2.style.display = "block";
} else {
  menuBtn2.style.display = "none";
  registro1.style.display = "block";
}
