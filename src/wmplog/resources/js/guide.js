var type=getParam('type');
function getParam(str) {
	var param=window.location.search.substring(1).split('&'), val;
	for(var i=0;i<param.length;i++){
		val=param[i].split("=");
		if(val[0]==str){
			return val[1];
		}
	}
	return null;
}

//헤더, 푸터
$('.header_wrap').load('/src/wmplog/views/layout/header.html', function () {
});
$('.footer_wrap').load('/src/wmplog/views/layout/footer.html', function () {});

//헤더고정
// $(window).scroll(function () {
// 	if(type!=1){
// 		if ($(document).scrollTop() > 1) {
// 			$('header').addClass('fixed');
// 		} else {
// 			$('header').removeClass('fixed');
// 		}
// 	}
// });

$('.depth_1 > li').not('.last').on('mouseenter', function (e) {
	$(this).parents('.header_wrap').addClass('active');
})
$('.depth_1 > li').on('mouseleave', function (e) {
	$(this).parents('.header_wrap').removeClass('active');
})

// 검색 영역
if(type=='search'){
	$('body').addClass('is_dim');
}
// if(type=='search' && 'none'){
// 	$('.search_pop').addClass('is_show');
// 	$('.card_news_area').addClass('is_hide')
// }


// 서브페이지
if(type==1){
	$('.con_tit').text('일로 만나');
	$('.con_info').text('위메프만의 방식으로 일하는 이야기를 소개합니다');
}
if(type==2){
	$('.con_tit').text('함께 성장하고');
	$('.con_info').text('함께 하는 삶과 가치에 대해 소개합니다 함께 하는 삶과 가치에 대해 소개합니다.');
}
if(type==3){
	$('.con_tit').text('잘 사는 삶');
	$('.con_info').text('위메프와 함께 즐거운 삶을 더하는 방식을 소개합니다.');
}

//toast
var intervalTime;
function actionToast($target, time) {
	if (time == null) time = 2000;
	var $toast = $('.pop_toast');
	if ($toast != $($target)) { $toast.removeClass('on') };
	clearTimeout(intervalTime);
	$($target).addClass('on');
	intervalTime = setTimeout(function () {
		$($target).removeClass('on')
	}, time);
}
