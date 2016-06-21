$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	if(wScroll >= 1500){
		$("#say02").css("opacity","1");
	}
	console.log(wScroll);
});