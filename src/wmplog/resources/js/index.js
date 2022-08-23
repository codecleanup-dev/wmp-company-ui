function detectMobileDevice() {
  const minWidth = 767
  return window.innerWidth <= minWidth
}
// const newLocal = detectMobileDevice();
// const isMobile = newLocal

const isMobile = /Mobi/i.test(window.navigator.userAgent)


function getConvertedEventType(type) {
  if (isMobile) {
		// console.log(isMobile)
    if (type === 'mouseleave') {
      type = 'touchmove';
    } else if (type === 'click') {
      type = 'touchend';
    }
  }
  return type;
}

function init() {
	handlerList()
	handlerShare()
	handlerSearch()
}

// 카드 리스트 상세 페이지 제어 
function handlerList(){
	const list = document.querySelectorAll('.card_thumb_list'),
				container = document.querySelector('.container'),
				addBtn = document.querySelector('.btn_box');

	if (container.classList.contains('detail')) {
		for (let i = 0; i < list.length; i++) {
			// console.log(list[i])
			list[i].classList.remove('is_motions', 'is_slideup')
			addBtn.classList.add('is_hide')
		}
	}
}

// 상세 공유 버튼 토스트 팝업
function handlerShare(){
	const shareBtn = document.querySelector('.btn_share');
	const popToast = document.querySelector('.toast_popup');
	if (shareBtn) {
		shareBtn.addEventListener('click', (e) => {
			// getConvertedEventType(type)
			// console.log(e.type)
			popToast.classList.add('is_show')
			setTimeout(function() {
				popToast.classList.remove('is_show');
			},1800)
		})
	}
}

// 검색창
function handlerSearch(){
	const inputArea = document.querySelector('.search_pop_input'),
		deleteBtn = document.querySelector('.pop_delete_btn'),
		searchBox = document.querySelector('.search_box');

	if(searchBox){
		const searchInput = searchBox.querySelector('.search_pop_input');
		function deleteHide() {
			inputArea.value = '';
			deleteBtn.style.display = 'none';
		}
		deleteHide()
		searchInput.addEventListener('keypress', function (key) {
			deleteBtn.style.display = 'block';
			deleteBtn.addEventListener('click', deleteHide, getConvertedEventType(type));
			return false;
		})
	}
}

init()
