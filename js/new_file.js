// 滑动滚动条
$(window).scroll(function() {
	// 滚动条距离顶部的距离 大于 470px时
	if($(window).scrollTop() >= 470 && $(window).scrollTop() < 8100) {
		$('#roll-Listener').css('display', 'block'); // 出现
	} else if($(window).scrollTop() >= 8000 || $(window).scrollTop() < 470) {
		$('#roll-Listener').css('display', 'none'); //消失
	}
});

//qq点击
$(".qq").click(function() {
	$(".service-wrap").css("display", "block")
});
$(".back-btn").click(function() {
	$(".service-wrap").css("display", "none")
});
////top返回顶部
$(".back-top ").click(function() {
	$("html,body").animate({
		scrollTop: 0
	}, 300);
	return false;
})