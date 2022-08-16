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
