// 헤더 스크롤 인터랙션 
const scrollBar = document.querySelector('.header_scroll_bar');
// console.log(scrollBar)
function scrollIndicator() {
	let windowScroll =  document.body.scrollTop || document.documentElement.scrollTop;
	let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	let scrolled = (windowScroll / height) * 100;
	scrollBar.style.width = scrolled + '%';
}
window.onscroll = function() {
	scrollIndicator();
}

// 상단 검색 영역 활성화 
const body = document.querySelector('.body'),
			searchBtn = document.querySelector('.btn_search'),
			searchCloseBtn = document.querySelector('.btn_search_pop_close')

if(searchBtn){
  searchBtn.addEventListener('click', (e) => {
    console.log(body)
    body.classList.add('is_dim')
  })
  searchCloseBtn.addEventListener('click', (e) => {
    body.classList.remove('is_dim')
  })
}

// 모바일 카테고리 
const menuBtn = document.querySelector('.btn_category'),
			headerWrap = document.querySelector('.header_wrap'),
			menuCloseBtn = document.querySelector('.btn_open_close'),
			menuList = document.querySelectorAll('.category');

if(menuBtn){
  function openMenu(){
    headerWrap.classList.add('is_open');
    menuBtn.classList.add('btn_close');
  }
  function closeMenu(){
    headerWrap.classList.remove('is_open');
    menuBtn.classList.remove('btn_close');
  }
  menuBtn.addEventListener('click', (e) => {
		console.log(headerWrap)
    if(headerWrap.classList.contains('is_open')){ 
      closeMenu()
    }else{
      openMenu()
    }
  })
}
