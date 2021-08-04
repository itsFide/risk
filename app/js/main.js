$(function(){
// Скролл
function slowScroll(id){
    $('html').animate({
      scrollTop: $(id).offset().top
    },800);
  }

});
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
closeModal.addEventListener('click', ()=>{
    modal.style.display = "none";
})
window.addEventListener('click', (event)=>{
    if(event.target == modal){
        modal.style.display = "none";
    }
})
$(function() {
    $('.marquee').marquee({
      duration: 10000,
      startVisible: true,
      duplicated: true
    });
  });