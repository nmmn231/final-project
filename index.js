$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	if(wScroll >= 1000){
		$("#say02").css("opacity","1");
	}
});