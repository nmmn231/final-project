$(document).ready(function(){
            function change1(){
                    $(".sidebar1").attr("src","img/circle.png")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".sidebar2").attr("src","img/whitecircle.png")
                    $(".sidebar3").attr("src","img/whitecircle.png")
                    $(".sidebar4").attr("src","img/whitecircle.png")
                    $(".sidebar5").attr("src","img/whitecircle.png")
                    $(".sidebar6").attr("src","img/whitecircle.png")
                    $(".sidebar7").attr("src","img/whitecircle.png")
                    $(".sidebar8").attr("src","img/whitecircle.png")
            }
            function change2(){
                    $(".sidebar2").attr("src","img/circle.png")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".sidebar1").attr("src","img/whitecircle.png")
                    $(".sidebar3").attr("src","img/whitecircle.png")
                    $(".sidebar4").attr("src","img/whitecircle.png")
                    $(".sidebar5").attr("src","img/whitecircle.png")
                    $(".sidebar6").attr("src","img/whitecircle.png")
                    $(".sidebar7").attr("src","img/whitecircle.png")
                    $(".sidebar8").attr("src","img/whitecircle.png")
            }
            function change3(){
                    $(".sidebar3").attr("src","img/circle.png")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".sidebar1").attr("src","img/whitecircle.png")
                    $(".sidebar2").attr("src","img/whitecircle.png")
                    $(".sidebar4").attr("src","img/whitecircle.png")
                    $(".sidebar5").attr("src","img/whitecircle.png")
                    $(".sidebar6").attr("src","img/whitecircle.png")
                    $(".sidebar7").attr("src","img/whitecircle.png")
                    $(".sidebar8").attr("src","img/whitecircle.png")
            }
            function change4(){
                    $(".sidebar4").attr("src","img/circle.png")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".sidebar1").attr("src","img/whitecircle.png")
                    $(".sidebar2").attr("src","img/whitecircle.png")
                    $(".sidebar3").attr("src","img/whitecircle.png")
                    $(".sidebar5").attr("src","img/whitecircle.png")
                    $(".sidebar6").attr("src","img/whitecircle.png")
                    $(".sidebar7").attr("src","img/whitecircle.png")
                    $(".sidebar8").attr("src","img/whitecircle.png")
            }
            function change5(){
                    $(".sidebar5").attr("src","img/circle.png")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".sidebar1").attr("src","img/whitecircle.png")
                    $(".sidebar2").attr("src","img/whitecircle.png")
                    $(".sidebar3").attr("src","img/whitecircle.png")
                    $(".sidebar4").attr("src","img/whitecircle.png")
                    $(".sidebar6").attr("src","img/whitecircle.png")
                    $(".sidebar7").attr("src","img/whitecircle.png")
                    $(".sidebar8").attr("src","img/whitecircle.png")
            }
            function change6(){
                    $(".sidebar6").attr("src","img/circle.png")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".sidebar1").attr("src","img/whitecircle.png")
                    $(".sidebar2").attr("src","img/whitecircle.png")
                    $(".sidebar3").attr("src","img/whitecircle.png")
                    $(".sidebar4").attr("src","img/whitecircle.png")
                    $(".sidebar5").attr("src","img/whitecircle.png")
                    $(".sidebar7").attr("src","img/whitecircle.png")
                    $(".sidebar8").attr("src","img/whitecircle.png")
            }
            function change7(){
                    $(".sidebar7").attr("src","img/circle.png")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".sidebar1").attr("src","img/whitecircle.png")
                    $(".sidebar2").attr("src","img/whitecircle.png")
                    $(".sidebar3").attr("src","img/whitecircle.png")
                    $(".sidebar4").attr("src","img/whitecircle.png")
                    $(".sidebar6").attr("src","img/whitecircle.png")
                    $(".sidebar5").attr("src","img/whitecircle.png")
                    $(".sidebar8").attr("src","img/whitecircle.png")
            }
            function change8(){
                    $(".sidebar8").attr("src","img/circle.png")//除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".sidebar1").attr("src","img/whitecircle.png")
                    $(".sidebar2").attr("src","img/whitecircle.png")
                    $(".sidebar3").attr("src","img/whitecircle.png")
                    $(".sidebar4").attr("src","img/whitecircle.png")
                    $(".sidebar6").attr("src","img/whitecircle.png")
                    $(".sidebar7").attr("src","img/whitecircle.png")
                    $(".sidebar5").attr("src","img/whitecircle.png")
            }
            //根據捲軸的位置改變右方導覽列游標的顏色
            $(window).scroll(function(){
                if($(window).scrollTop()>=$(".p01").offset().top && $(window).scrollTop()<$(".p02").offset().top){
                    change1();
                    //if($(window).scrollTop()==$(".p02").offset().top) $("#player").attr("src","test.mp3");
                }else if($(window).scrollTop()>=$(".p02").offset().top && $(window).scrollTop()<$(".p03").offset().top){
                    change2();
                }else if($(window).scrollTop()>=$(".p03").offset().top && $(window).scrollTop()<$(".p04").offset().top){
                    change3();
                }else if($(window).scrollTop()>=$(".p04").offset().top && $(window).scrollTop()<$(".p05").offset().top){
                    change4();
                }else if($(window).scrollTop()>=$(".p05").offset().top&& $(window).scrollTop()<$(".p06").offset().top){
                    change5();
                }else if($(window).scrollTop()>=$(".p06").offset().top&& $(window).scrollTop()<$(".p07").offset().top){
                    change6();
                }else if($(window).scrollTop()>=$(".p07").offset().top&& $(window).scrollTop()<$(".p08").offset().top){
                    change7();
                }else if($(window).scrollTop()>=$(".p08").offset().top){
                    change8();
                }

                if($(window).scrollTop()==$(".p01").offset().top){$("#player").attr("src","music/Metal1.mp3");}
                if($(window).scrollTop()==$(".p02").offset().top){$("#player").attr("src","music/Metal2.mp3");}
                if($(window).scrollTop()==$(".p03").offset().top){$("#player").attr("src","music/metal3.mp3");}
                if($(window).scrollTop()==$(".p04").offset().top){$("#player").attr("src","music/metal4.mp3");}
                if($(window).scrollTop()==$(".p05").offset().top){$("#player").attr("src","music/metal5.mp3");}
                if($(window).scrollTop()==$(".p06").offset().top){$("#player").attr("src","music/metal6.mp3");}
                if($(window).scrollTop()==$(".p07").offset().top){$("#player").attr("src","music/metal7.mp3");}
                if($(window).scrollTop()==$(".p08").offset().top){$("#player").attr("src","music/metal8.mp3");}

            })
                     
            //點選右方導覽列時會到指定圖片
            $(".sidebar1").click(function(e){
                $("html,body").stop()
                change1();//除了被點擊到的游標，其他都恢復成原來的顏色
                page=1;
                $("html,body").animate({"scrollTop":$(".p0"+page).offset().top})
            })
            $(".sidebar2").click(function(e){
                $("html,body").stop()
                change2();//除了被點擊到的游標，其他都恢復成原來的顏色
                page=2;
                $("html,body").animate({"scrollTop":$(".p0"+page).offset().top})
            })
            $(".sidebar3").click(function(e){
                $("html,body").stop()
                change3();//除了被點擊到的游標，其他都恢復成原來的顏色
                page=3;
                $("html,body").animate({"scrollTop":$(".p0"+page).offset().top})
            })
            $(".sidebar4").click(function(e){
                $("html,body").stop()
                change4();//除了被點擊到的游標，其他都恢復成原來的顏色
                page=4;
                $("html,body").animate({"scrollTop":$(".p0"+page).offset().top})
            })
            $(".sidebar5").click(function(e){
                $("html,body").stop()
                change5();//除了被點擊到的游標，其他都恢復成原來的顏色
                page=5;
                $("html,body").animate({"scrollTop":$(".p0"+page).offset().top})
            })
            $(".sidebar6").click(function(e){
                $("html,body").stop()
                change3();//除了被點擊到的游標，其他都恢復成原來的顏色
                page=6;
                $("html,body").animate({"scrollTop":$(".p0"+page).offset().top})
            })
            $(".sidebar7").click(function(e){
                $("html,body").stop()
                change4();//除了被點擊到的游標，其他都恢復成原來的顏色
                page=7;
                $("html,body").animate({"scrollTop":$(".p0"+page).offset().top})
            })
            $(".sidebar8").click(function(e){
                $("html,body").stop()
                change5();//除了被點擊到的游標，其他都恢復成原來的顏色
                page=8;
                $("html,body").animate({"scrollTop":$(".p0"+page).offset().top})
            })

            //一進入網頁時，將導覽列垂直置中計算導覽列置中的位置
           center()
            
           //縮放網頁時，將導覽列垂直置中
            $(window).resize(function(){
                center()
            })
            
            //計算導覽列垂直置中的高度
            function center(){
                pos=$(window).height()/2-$(".nav").height()/2
                $(".nav").css("top",pos)
            }
            //Hamburger icon

            $('#nav-icon1').click(function(){
                $(this).toggleClass('open');
                if($(".nav").width()=="120"){
                    $(".nav").css("width","40");
                    $("#mapref").hide();
                    $(".content").css("margin-left","40px");
                    $(".demo").css("display","none");
                    $("#volume").css("display","block");
                    $(".text").css("display","none");
                }
                else {
                    $(".nav").css("width","120");
                    $("#mapref").show();
                    $(".content").css("margin-left","120px"); 
                    $(".demo").css("display","block");
                    $("#volume").css("display","none");
                    $(".text").css("display","block");
                }
            });
            $('#volume').click(function(){
                $("#nav-icon1").toggleClass('open');
                if($(".nav").width()=="120"){
                    $(".nav").css("width","40");
                    $("#mapref").hide();
                    $(".content").css("margin-left","40px");
                    $(".text").css("display","none");
                    $("#sidebar").css("margin","10px 5px")
                }
                else {
                    $(".nav").css("width","120");
                    $("#mapref").show();
                    $(".content").css("margin-left","120px");     
                    $(".demo").css("display","block");
                    $("#volume").css("display","none");
                    $(".text").css("display","block");
                }                                    
            });

})

//角色變換
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    if(wScroll >= $(".p01").offset().top && wScroll < $(".p02").offset().top){
        $(".character").attr("src","img/character01.png");
    }else if(wScroll >= $(".p02").offset().top && wScroll < $(".p03").offset().top){
        $(".character").attr("src","img/character02.png")
    }else if(wScroll >= $(".p03").offset().top && wScroll < $(".p04").offset().top){
        $(".character").attr("src","img/character03.png")
    }else if(wScroll >= $(".p04").offset().top && wScroll < $(".p05").offset().top){
        $(".character").attr("src","img/character04.png")
    }else if(wScroll >= $(".p05").offset().top && wScroll < $(".p06").offset().top){
        $(".character").attr("src","img/character05.png")
    }else if(wScroll >= $(".p06").offset().top && wScroll < $(".p07").offset().top){
        $(".character").attr("src","img/character09.png")
    }else if(wScroll >= $(".p07").offset().top && wScroll < $(".p08").offset().top){
        $(".character").attr("src","img/character07.png")
    }else if(wScroll >= $(".p08").offset().top){
        $(".character").attr("src","img/character08.png")
    }
});

(function(e,t,n,r){var i="ontouchstart"in t,s=i?"touchstart":"mousedown",o=i?"touchmove":"mousemove",u=i?"touchend":"mouseup",a=i?"touchcancel":"mouseup",f=function(e){var t=Math.floor(e/3600),n=Math.floor(e%3600/60),r=Math.ceil(e%3600%60);return(t==0?"":t>0&&t.toString().length<2?"0"+t+":":t+":")+(n.toString().length<2?"0"+n:n)+":"+(r.toString().length<2?"0"+r:r)},l=function(e){var t=n.createElement("audio");return!!(t.canPlayType&&t.canPlayType("audio/"+e.split(".").pop().toLowerCase()+";").replace(/no/,""))};e.fn.audioPlayer=function(t){var t=e.extend({classPrefix:"audioplayer",strPlay:"Play",strPause:"Pause",strVolume:"Volume"},t),n={},r={playPause:"playpause",playing:"playing",time:"time",timeCurrent:"time-current",timeDuration:"time-duration",bar:"bar",barLoaded:"bar-loaded",barPlayed:"bar-played",volume:"volume",volumeButton:"volume-button",volumeAdjust:"volume-adjust",noVolume:"novolume",mute:"mute",mini:"mini"};for(var u in r)n[u]=t.classPrefix+"-"+r[u];this.each(function(){if(e(this).prop("tagName").toLowerCase()!="audio")return false;var r=e(this),u=r.attr("src"),c=r.get(0).getAttribute("autoplay"),c=c===""||c==="autoplay"?true:false,h=r.get(0).getAttribute("loop"),h=h===""||h==="loop"?true:false,p=false;if(typeof u==="undefined"){r.find("source").each(function(){u=e(this).attr("src");if(typeof u!=="undefined"&&l(u)){p=true;return false}})}else if(l(u))p=true;var d=e('<div class="'+t.classPrefix+'">'+(p?e("<div>").append(r.eq(0).clone()).html():'<embed src="'+u+'" width="0" height="0" volume="100" autostart="'+c.toString()+'" loop="'+h.toString()+'" />')+'<div class="'+n.playPause+'" title="'+t.strPlay+'"><a href="#">'+t.strPlay+"</a></div></div>"),v=p?d.find("audio"):d.find("embed"),v=v.get(0);if(p){d.find("audio").css({width:0,height:0,visibility:"hidden"});d.append('<div class="'+n.time+" "+n.timeCurrent+'"></div><div class="'+n.bar+'"><div class="'+n.barLoaded+'"></div><div class="'+n.barPlayed+'"></div></div><div class="'+n.time+" "+n.timeDuration+'"></div><div class="'+n.volume+'"><div class="'+n.volumeButton+'" title="'+t.strVolume+'"><a href="#">'+t.strVolume+'</a></div><div class="'+n.volumeAdjust+'"><div><div></div></div></div></div>');var m=d.find("."+n.bar),g=d.find("."+n.barPlayed),y=d.find("."+n.barLoaded),b=d.find("."+n.timeCurrent),w=d.find("."+n.timeDuration),E=d.find("."+n.volumeButton),S=d.find("."+n.volumeAdjust+" > div"),x=0,T=function(e){theRealEvent=i?e.originalEvent.touches[0]:e;v.currentTime=Math.round(v.duration*(theRealEvent.pageX-m.offset().left)/m.width())},N=function(e){theRealEvent=i?e.originalEvent.touches[0]:e;v.volume=Math.abs((theRealEvent.pageY-(S.offset().top+S.height()))/S.height())},C=setInterval(function(){y.width(v.buffered.end(0)/v.duration*100+"%");if(v.buffered.end(0)>=v.duration)clearInterval(C)},100);var k=v.volume,L=v.volume=.111;if(Math.round(v.volume*1e3)/1e3==L)v.volume=k;else d.addClass(n.noVolume);w.html("…");b.text(f(0));v.addEventListener("loadeddata",function(){w.text(f(v.duration));S.find("div").height(v.volume*100+"%");x=v.volume});v.addEventListener("timeupdate",function(){b.text(f(v.currentTime));g.width(v.currentTime/v.duration*100+"%")});v.addEventListener("volumechange",function(){S.find("div").height(v.volume*100+"%");if(v.volume>0&&d.hasClass(n.mute))d.removeClass(n.mute);if(v.volume<=0&&!d.hasClass(n.mute))d.addClass(n.mute)});v.addEventListener("ended",function(){d.removeClass(n.playing)});m.on(s,function(e){T(e);m.on(o,function(e){T(e)})}).on(a,function(){m.unbind(o)});E.on("click",function(){if(d.hasClass(n.mute)){d.removeClass(n.mute);v.volume=x}else{d.addClass(n.mute);x=v.volume;v.volume=0}return false});S.on(s,function(e){N(e);S.on(o,function(e){N(e)})}).on(a,function(){S.unbind(o)})}else d.addClass(n.mini);if(c)d.addClass(n.playing);d.find("."+n.playPause).on("click",function(){if(d.hasClass(n.playing)){e(this).attr("title",t.strPlay).find("a").html(t.strPlay);d.removeClass(n.playing);p?v.pause():v.Stop()}else{e(this).attr("title",t.strPause).find("a").html(t.strPause);d.addClass(n.playing);p?v.play():v.Play()}return false});r.replaceWith(d)});return this}})(jQuery,window,document)


//字體閃爍
function pulse() {
    $('.blink').fadeIn(300);
    $('.blink').fadeOut(1000);
}
setInterval(pulse, 1000);

//人物fadeout
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    if(wScroll >= 14400 && wScroll < 14500){
        $(".character").css("opacity","0.8");
    }else if(wScroll >= 14500 && wScroll < 14600){
        $(".character").css("opacity","0.6");
    }else if(wScroll >= 14600 && wScroll < 14700){
        $(".character").css("opacity","0.4");
    }else if(wScroll >= 14700 && wScroll < 14800){
        $(".character").css("opacity","0.2");
    }else if(wScroll >= 14800){
        $(".character").css("opacity","0");
    }
    console.log(wScroll);
});