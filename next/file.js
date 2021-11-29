let button = document.querySelectorAll('.b');

function myFunction3() {
  for(let i = 0; i < button.length; i++) {
    button[i].classList.toggle('--nonactive');
  }
}