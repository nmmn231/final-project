$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	if(wScroll >= 1500){
		$("#say02").css("opacity","1");
	}

    if(wScroll >= 350 && wScroll <= 1000){
        $("#chang").attr("src","img/chang02.png");
    }else{
    	$("#chang").attr("src","img/chang.png");
    }

	console.log(wScroll);
});