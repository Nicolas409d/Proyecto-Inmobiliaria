

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

let isOpen = false;

menuBtn.addEventListener('click', () => {
  isOpen = !isOpen;
  nav.classList.remove('active3');
  if (isOpen) {
    nav.classList.add('active');
    menuBtn.style.position = "fixed"
    menuBtn.style.top = "14px"
    menuBtn.style.right = "-0px"
    menuBtn.style.zIndex = "200"
    document.getElementById('textoPublicar').style.position = "relative"
    document.getElementById('textoPublicar').style.right = "48px"
  } else {
    nav.classList.remove('active');
    menuBtn.style.position = "relative"
    menuBtn.style.top = "0px"
    document.getElementById('textoPublicar').style.position = "relative"
    document.getElementById('textoPublicar').style.right = "0px"
  }
});


const botonesCerrarMenu = document.querySelectorAll('.cerrar-menu');
botonesCerrarMenu.forEach(boton => {
  boton.addEventListener('click', function () {
    isOpen = !isOpen;
    if (isOpen) {
    } else {
      document.querySelector('.nav').classList.remove('active');
      document.querySelector('.nav').classList.add('active3');
    }
  });
});


