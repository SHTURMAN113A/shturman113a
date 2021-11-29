let button = document.querySelector('.line');
let menu = document.querySelector('.menu');
let button2 = document.querySelectorAll('.menuBlock2');

function myFunction() {
  button.classList.toggle('active');
  menu.classList.toggle('menuActive');
}

function myFunction2() {
  for (let i = 0; i < button2.length; i++) {
    button2[i].classList.toggle('--nonactive');
  }
}