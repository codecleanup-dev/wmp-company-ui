// 모바일 메뉴
function mobileMenuHandler(){
	const categoryMenuBtn = document.querySelector('.btn_category'),
				headerWrap = document.querySelector('.header_wrap');

	const isDetectMobile = function detectMobile() {
		const minWidth = 768
		return document.body.clientWidth <= minWidth
	}
	// const isDetectMobile = detectMobile();
	if(isDetectMobile){
		headerWrap.classList.add('is_close');
	}

	function openMenu() {
		headerWrap.classList.add('is_open');
		headerWrap.classList.remove('is_close');
		categoryMenuBtn.classList.add('btn_close');
	}
	function closeMenu() {
		headerWrap.classList.remove('is_open');
		headerWrap.classList.add('is_close');
		categoryMenuBtn.classList.remove('btn_close');
	}
	categoryMenuBtn.addEventListener('click', function (e) {
		eventType(e.typevent)
		e.preventDefault;
		if (headerWrap.classList.contains('is_close')) {
			openMenu()
		}else if(headerWrap.classList.contains('is_open')){
			closeMenu()
		}
	})
}
mobileMenuHandler()
