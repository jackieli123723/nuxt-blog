var window_height = 0,
	window_top = 0;
$(document).ready(function(){
    window_height = window.innerHeight;
    window_top = window.scrollY;
    if (window_top == undefined) {
		window_top = document.documentElement.scrollTop;/*ie*/
	};
    setHeaderAreaHeight();
    setHeaderClass();
    eventListener();
    //console.log($(window).width());
    clearSelection();
});
$(window).resize(function(){
	//console.log($(window).width());
})
$(window).scroll(function(){
	//console.log('scroll');
	window_top = window.scrollY;
	if (window_top == undefined) {
		window_top = document.documentElement.scrollTop;/*ie*/
	};
 	setHeaderClass();
});	
function clearSelection(){
	$('#about .equal').on('click', function(){
		if (window.getSelection) {
	      window.getSelection().removeAllRanges();
	    } else { // старый IE
	      document.selection.empty();
	    }		
	});
};
function eventListener(){
	$('.ui-menu').on('click', function(){
		$('html').hasClass("root_menu_opened") ? menuHide() : menuShow();		
	});
};
function menuHide(){
	$(".menu").velocity({translateX: "0%"},{
	    duration: 300,
	    easing: "spring",
	}).velocity({opacity: 1},{display: "block",duration: 100}), $('html').removeClass("root_menu_opened");
};
function menuShow(){
    $(".menu").velocity({opacity: 1},{
        display: "block",
        duration: 100,
    }).velocity({translateX: "-108%"},{duration: 600,easing: "spring"}), $('html').addClass("root_menu_opened");
};
function setHeaderClass(){
	//console.log(window_top);
	if (window_top > 0) { //значение увеличивать нельзя - переход становится "дерганным"
		$('#header').addClass('active-work-menu');
	} else {
		$('#header').removeClass('active-work-menu');
	};	
};
function setHeaderAreaHeight(){
	//if ($(window).width() < 640) {
   		$('.main-page #header-area').height(window_height)-$('#wpadminbar').height();//в дальнейшем исправить
   	//};
};