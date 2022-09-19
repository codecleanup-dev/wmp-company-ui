const isMobile = /Mobi/i.test(window.navigator.userAgent)

function eventType(type) {
	if (isMobile) {
		if (type === 'click') {
			type = 'touchend';
			// console.log(type)
		}
	}
	return type;
}

function init(){
	categoryHandler()
	scrollHandler()
	searchPopHandler()
	searchHandler()
	cardListHandler()
	shareHandler()
	footerHandler()
}

// GNB 
function categoryHandler(){
	const menuList = document.querySelectorAll('.category')
	for (var i = 0; i < menuList.length; i++) {
		const link = menuList[i].getElementsByTagName('a')
		link[0].addEventListener('mouseout', function () {
			this.classList.add('is-out')
			this.classList.remove('is-over')
		})
		
		link[0].addEventListener('mouseover', function () {
			this.classList.add('is-over')
			this.classList.remove('is-out')
		})
	}
}

// 헤더 스크롤 인터랙션 
function scrollHandler(){
	const scrollBar = document.querySelector('.header_scroll_bar');
	if(scrollBar){
		// console.log(scrollBar)
		function scrollIndicator() {
			let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
			let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			let scrolled = (windowScroll / height) * 100;
			scrollBar.style.width = scrolled + '%';
		}
		window.onscroll = function () {
			scrollIndicator();
		}
	}
}

// 상단 검색 영역 활성화 
function searchPopHandler(){
	const wrap = document.querySelector('.wrap'),
		searchOpenBtn = document.querySelector('.btn_search'),
		searchCloseBtn = document.querySelector('.btn_search_pop_close')

	if (searchOpenBtn){
		// console.log(searchOpenBtn)
		searchOpenBtn.addEventListener('click', function (e) {
			eventType(e.type)
			wrap.classList.add('is_dim')
		}, false);
	}
	if (searchCloseBtn){
		searchCloseBtn.addEventListener('click', function (e) {
			eventType(e.type)
			wrap.classList.remove('is_dim')
		}, false)
	}
	if (wrap){
		wrap.addEventListener('click', function (e) {
			eventType(e.type)
			e.target.classList.remove('is_dim')
		}, false)
	}
}

// 검색창
function searchHandler(){
	const inputArea = document.querySelector('.search_pop_input'),
			deleteBtn = document.querySelector('.pop_delete_btn'),
			searchBox = document.querySelector('.search_box');
	if (searchBox) {
		const searchInput = searchBox.querySelector('.search_pop_input');
		function deleteHide() {
			inputArea.value = '';
			deleteBtn.style.display = 'none';
		}
		deleteHide()
		searchInput.addEventListener('keydown', function (key) {
			deleteBtn.style.display = 'block';
			deleteBtn.addEventListener('click', deleteHide);
		})
	}
}

// 카드 리스트 상세 페이지 제어 
function cardListHandler(){
	const list = document.querySelectorAll('.card_thumb_list'),
				container = document.querySelector('.container'),
				searchresultPage = document.querySelector('.content_search_result'),
				addBtn = document.querySelector('.btn_box');

	if (container.classList.contains('detail')) {
		for (let i = 0; i < list.length; i++) {
			// console.log(list[i])
			list[i].classList.remove('is_motions', 'is_slideup')
			addBtn.classList.add('is_hide')
		}
	}
	if (searchresultPage) {
		for (let i = 0; i < list.length; i++) {
			// console.log(list[i])
			list[i].classList.remove('is_motions', 'is_slideup')
		}
	}
}

// 상세 공유 버튼 토스트 팝업
function shareHandler(){
	const shareBtn = document.querySelector('.btn_share');
	const popToast = document.querySelector('.toast_popup');
	if (shareBtn) {
		shareBtn.addEventListener('click', function (e) {
			eventType(e.type)
			popToast.classList.add('is_show');
			setTimeout(function() {
				popToast.classList.remove('is_show');
			},1800)
		})
	}
}

// 하단 
function footerHandler(){
	const siteCon = document.querySelector('.site_list_grp'),
				siteBtn = document.querySelector('.btn_site');
	if(siteBtn){
		const siteBox = siteBtn.parentNode;
		function hideBox(){
			siteBox.classList.remove('is_select')
			siteBox.classList.add('is_unselect')
		}
		function showBox(){
			siteBox.classList.remove('is_unselect')
			siteBox.classList.add('is_select')
		}
		siteBtn.addEventListener('click', function (e) {
			eventType(e.type)
			if (siteBox.classList.contains('is_select')) {
				hideBox()
			}else if(siteBox.classList.contains('is_unselect')) {
				showBox()
			}
			return false;
		})
		siteCon.addEventListener('mouseleave', function () {
			hideBox()
		})
	}
}

init()


