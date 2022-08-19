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

//헤더, 푸터, 리스트, 상세 본문 
$('.header_wrap').load('/src/wmplog/views/layout/header.html', function () {});
$('.footer_wrap').load('/src/wmplog/views/layout/footer.html', function () {});
$('.card_thumb_area').load('/src/wmplog/views/layout/card_list.html', function () {

	// var windowWidth = $( window ).width();   
	// if(windowWidth <= 768) { 
		
	// 	var listNumber = $('.card_thumb_list');
	// 	for (var i = 0; i <listNumber.length; i++) {
	// 		console.log(listNumber[i])
	// 		if(listNumber >= 6){
	// 			listNumber.hide();
	// 		}
	// 	};
	// }
});

$('.article_editor').load('/src/wmplog/views/layout/article.html', function () {});

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
// 상단 검색 영역 활성화
if(type=='search'){
	$('body').addClass('is_dim');
}
// 검색결과 없을 때
if(type=='none'){
	$('.tit_info_area').removeClass('is_exist');
	$('.tit_info_area').addClass('is_none');
	$('.card_thumb_area').removeClass('is_show');
	$('.card_thumb_area').addClass('is_hide');
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
