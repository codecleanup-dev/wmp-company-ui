// const slides = document.querySelectorAll('.card_thumb_list')
// for (let i = 0; i < slides.length; i++) {
//   console.log(slides[i])
//   var slideIndex = slides[i];
//   if(slideIndex == 3n+1){
    
//   }
// }
// function showSlides(n) {
//   // if (n > slides.length) {
//   //   slideIndex = 1;
//   // }
//   if (2n+1 < 1) {
//     slideIndex = slides.length;
//   }
//   slides[slideIndex - 1].style.display = "block";
// }


// 카드 리스트 상세 페이지 제어 
const list = document.querySelectorAll('.card_thumb_list');
const container = document.querySelector('.container');
const addBtn = document.querySelector('.btn_box');

if(container.classList.contains('detail')){
  for (let i = 0; i < list.length; i++) {
    console.log(list[i])
    list[i].classList.remove('is_motions', 'is_slideup')
    addBtn.classList.add('is_hide')
    // list.length < 7
    // list[i].classList.remove('is_slideup')
  }
}
