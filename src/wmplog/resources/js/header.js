// 검색
const body = document.querySelector('.body'),
      searchBtn = document.querySelector('.btn_search'),
      searchCloseBtn = document.querySelector('.btn_search_pop_close')
searchBtn.addEventListener('click', (e) => {
	// console.log(body)
	body.classList.add('is_dim')
})
searchCloseBtn.addEventListener('click', (e) => {
  body.classList.remove('is_dim')
})

// 모바일 카테고리 
const menuBtn = document.querySelector('.btn_category'),
      headerWrap = document.querySelector('.header_wrap'),
      menuCloseBtn = document.querySelector('.btn_open_close'),
      menuList = document.querySelectorAll('.category');
function openMenu(){
  headerWrap.classList.add('is_open');
  menuBtn.classList.add('btn_close');
}
function closeMenu(){
  headerWrap.classList.remove('is_open');
  menuBtn.classList.remove('btn_close');
}
menuBtn.addEventListener('click', (e) => {
  // console.log(headerWrap)
  if(headerWrap.classList.contains('is_open')){ 
    closeMenu()
  }else{
    openMenu()
  }
  // for (let i = 0; i < menuList.length; i++) {
  //   console.log(menuList[i])
  //   menuList[i].addEventListener('click', closeMenu)
  // }
})

