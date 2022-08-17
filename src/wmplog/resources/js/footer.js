const siteCon = document.querySelector('.site_list_grp'),
			siteBtn = document.querySelector('.btn_site'),
			siteList = document.querySelectorAll('.site_list'),
			siteBox = siteBtn.parentNode;

// console.log(siteBtn)
// console.log(siteBox)

function hideBox(){
	siteBox.classList.remove('is_select')
	siteBox.classList.add('is_unselect')
}
function showBox(){
	siteBox.classList.remove('is_unselect')
	siteBox.classList.add('is_select')
}
siteBtn.addEventListener('click', (e) => {
	if (siteBox.classList.contains('is_select')) {
		hideBox()
	}else if(siteBox.classList.contains('is_unselect')) {
		showBox()
	}
})
siteCon.addEventListener('mouseleave', (e) => {
	hideBox()
})
// for (let i = 0; i < siteList.length; i++) {
// 	console.log(siteList[i])
// 	siteList[i].addEventListener('click', hideBox)
// }
