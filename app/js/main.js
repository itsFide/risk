$(function(){
// Скролл


});
 // Бургер
 let burger = document.querySelector('.burger');
 let mobileMenu = document.querySelector('.mobile-menu')
  burger.addEventListener('click', function(event){
  burger.classList.toggle('active');
  mobileMenu.classList.toggle('active')
 })

// Модальное окно
let openModal = document.querySelectorAll('.open-modal');
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.modal-close');
let modalContent = document.querySelector('.modal-content');
openModal.forEach((event)=>{
    event.addEventListener('click', (e)=>{
        e.preventDefault();
        modal.style.display = "block";
    })
})

$(function() {
    $('.marquee').marquee({
      duration: 10000,
      startVisible: true,
      duplicated: true
    });
  });
  closeModal.addEventListener('click', ()=>{
    modal.style.display = "none";
})
window.addEventListener('click', (event)=>{
    if(event.target == modal){
        modal.style.display = "none";
    }
})