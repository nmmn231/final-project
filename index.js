$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	if(wScroll >= 1200){
		$("#say02").css("opacity","1");
	}
	if(wScroll >= 1450){
		$("#say03").css("opacity","1");
	}
    if(wScroll >= 250 && wScroll <= 600 || wScroll >= 1000 && wScroll <= 1350){
        $("#chang").attr("src","img/chang02.png");
    }else{
    	$("#chang").attr("src","img/chang.png");
    }

	console.log(wScroll);
});

//字閃爍
function pulse() {
    $('.blink').fadeIn(300);
    $('.blink').fadeOut(1000);
}
setInterval(pulse, 1000);
