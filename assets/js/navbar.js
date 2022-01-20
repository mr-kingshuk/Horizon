const menuBtn = document.querySelector('.menu-btn');
const navBar=document.querySelector('.navbar');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    navBar.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navBar.classList.remove('open');
    menuOpen = false;
  }
});
window.addEventListener('mouseup',function(event){
    if(event.target!=menuBtn&&event.target!=navBar)
    {
        menuBtn.classList.remove('open');
        navBar.classList.remove('open');
        menuOpen = false;
    }
})