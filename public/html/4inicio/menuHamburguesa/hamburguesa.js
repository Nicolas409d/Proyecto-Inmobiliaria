


const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

let isOpen = false;

menuBtn.addEventListener('click', () => {
  isOpen = !isOpen;
  nav.classList.remove('active3');
  if (isOpen) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
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


