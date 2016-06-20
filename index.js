$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	if(wScroll < 1000){
		$("#say02").hide();
	}else if(wScroll >= 1000){
		$("#say02").fadeIn();
	}
});