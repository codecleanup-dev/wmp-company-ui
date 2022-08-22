// 검색창
const inputArea = document.querySelector('.search_pop_input'),
	deleteBtn = document.querySelector('.pop_delete_btn'),
	searchBox = document.querySelector('.search_box'),
	searchInput = searchBox.querySelector('.search_pop_input');

if (searchInput) {
	function deleteHide() {
		inputArea.value = '';
		deleteBtn.style.display = 'none';
	}
	searchInput.addEventListener('keypress', function (key) {
		deleteBtn.style.display = 'block';
		deleteBtn.addEventListener('click', deleteHide);
	})
}

// 카드 리스트 상세 페이지 제어 
const list = document.querySelectorAll('.card_thumb_list');
const container = document.querySelector('.container');
const addBtn = document.querySelector('.btn_box');

if (container.classList.contains('detail')) {
	for (let i = 0; i < list.length; i++) {
		// console.log(list[i])
		list[i].classList.remove('is_motions', 'is_slideup')
		addBtn.classList.add('is_hide')
	}
}
