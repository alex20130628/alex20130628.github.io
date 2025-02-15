let prel = document.querySelector('.preloader')

window.addEventListener('load', function () {
    this.setInterval(() => {
        prel.style.display = 'none'
    }, 2000);
})
let btnTop = document.querySelector('.btn-top')

window.addEventListener('scroll', function () {
let height = window.innerHeight;
if (window.scrollY > height){
     btnTop.style.display = 'block'}
  else{
    btnTop.style.display = 'none';
  } 
})