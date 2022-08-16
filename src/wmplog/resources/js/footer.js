const siteCon = document.querySelector('.site_list_grp'),
			siteBtn = document.querySelector('.btn_site'),
			siteList = document.querySelectorAll('.site_list'),
			siteBox = siteBtn.parentNode;

function hideBox(){
	siteBox.classList.remove('is_show')
	siteBox.classList.add('is_hide')
}
function showBox(){
	siteBox.classList.remove('is_hide')
	siteBox.classList.add('is_show')
}
siteBtn.addEventListener('click', (e) => {
	if (siteBox.classList.contains('is_show')) {
		hideBox()
	}else if(siteBox.classList.contains('is_hide')) {
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
