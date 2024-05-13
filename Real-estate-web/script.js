const closeButton = document.getElementById('close-pop-up');
const overlay = document.getElementById('overlay');
const popUp = document.getElementById('pop-up');

closeButton.addEventListener('click',  ()=> {
  overlay.classList.remove('active');
  popUp.classList.remove('active');  

})