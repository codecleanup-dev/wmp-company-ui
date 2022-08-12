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
	if(type==1){ //서브페이지 일경우 fixed 클래스 물고 들어옴
		$(this).addClass('fixed');
	}
});
$('.footer_wrap').load('/src/wmplog/views/layout/footer.html', function () {});

//헤더고정
$(window).scroll(function () {
	if(type!=1){
		if ($(document).scrollTop() > 1) {
			$('header').addClass('fixed');
		} else {
			$('header').removeClass('fixed');
		}
	}
});
$('.depth_1 > li').not('.last').on('mouseenter', function (e) {
	$(this).parents('.header_wrap').addClass('active');
})
$('.depth_1 > li').on('mouseleave', function (e) {
	$(this).parents('.header_wrap').removeClass('active');
})
//type 1 : 서브페이지
if(type==1){
	$('header').addClass('fixed');
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
