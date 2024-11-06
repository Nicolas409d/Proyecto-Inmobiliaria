

document.getElementById('idInputTransp112').addEventListener('click', function () {
  document.getElementById('idInputTransp11').style.lineHeight = 30 + 'px'; 
  document.getElementById('idInputTransp11').style.fontSize = 12 + 'px';
})


document.getElementById('idInputTransp112b').addEventListener('click', function () {
  document.getElementById('idInputTransp11b').style.lineHeight = 30 + 'px';
  document.getElementById('idInputTransp11b').style.fontSize = 12 + 'px';
})


window.onscroll = function () { scrollFuncion1() };


function scrollFuncion1() {
  let posicionScroll1 = window.scrollY;

  if (posicionScroll1 >= 0 && posicionScroll1 < 50) {
    document.getElementById("scroll1").classList.remove("fixed1");
    document.getElementById("scroll1").classList.add("normal1");
  } else if (posicionScroll1 >= 50 && posicionScroll1 < 970) { 
    document.getElementById("scroll1").classList.remove("normal1");
    document.getElementById("scroll1").classList.add("fixed1");
    document.getElementById("scroll1").classList.remove("normal2");
  } else if (posicionScroll1 >= 970 && posicionScroll1 < 15000) {   
    document.getElementById("scroll1").classList.remove("fixed1");
    document.getElementById("scroll1").classList.add("normal2");
  }
}

