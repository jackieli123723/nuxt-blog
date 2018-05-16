$(document).ready(function(){
	addAjaxPagination();
	addActiveBlog();
	addAlreadySubscribed();
	setVisibilitySubscribed();
	addAjaxCount();//Twitter
	addFacebookShare();
	addAjaxCountGoogle();
	starRating();
});
function addAjaxCountGoogle(){
	var link;
	$('.google-large-btn').on('click', function(){		
		link = $(this).attr('data-share-link');	
		window.open(link, 'sharer', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');	
	});
};
function addFacebookShare(){
	var link;
	$('.facebook-btn').on('click', function(){
		link = $(this).attr('data-share-link');
		FB.ui({
		    method: 'share',
		    href: link,
		}, function(response){}); 
	});
};
function addAjaxCount(){
	var link;
	$('.twitter-large-btn, .twitter-btn').on('click', function(){	
		$(this).parent().find('.form-count').submit();		
		link = $(this).attr('data-share-link');	
		window.open(link, 'sharer', 'toolbar=0, status=0, width=626, height=436');	
	});
	var options = { 
        success: function(html){
        	$('.twitter-count').html(html);
        },  
    };
	$('.form-count').ajaxForm(options);
};
function setVisibilitySubscribed(){
	var visible = localStorage.getItem('sc_already_subscribed');
	//console.log(visible);
	if ((visible == 'visible') || (visible == null)) {
		$('#header-area').addClass('with-subscribe');
		$('.subscribe-area .form-wrapper').addClass('visible');
	} else {
		$('.subscribe-area .form-wrapper').addClass('not-visible');
	};
};
function addAlreadySubscribed(){
	$('.already-subscribed').on('click', function(e){
		e.preventDefault();
		//$('.form-wrapper').animate({
		$('.subscribe-area').animate({	
			/*left: '200%',*/
			opacity: 0,
		}, 500, function(){
			//$('.form-wrapper').fadeOut('slow');
			$('#header-area').animate({
				height: 120,
			}, 500);	
		});
		localStorage.setItem('sc_already_subscribed', 'not-visible');		
	});
	$('.subscribe-area .form-wrapper .subscribe').on('click', function(e){
		e.preventDefault();
		$(this).fadeOut('slow', function(){
			$('.subscribe-area .form-wrapper').addClass('visible');		
		});
		localStorage.setItem('sc_already_subscribed', 'visible');		
	});	
	$('.subscribe-area button[type=submit]').on('click', function(){
		/*$('.already-subscribed').fadeOut();*/
		localStorage.setItem('sc_already_subscribed', 'not-visible');
		$('.subscribe-area').animate({	
			opacity: 0,
		}, 500, function(){
			$('#header-area').animate({
				height: 120,
			}, 500);	
		});
	});
};	
function addActiveBlog(){
	$('.menu__primary__item__link[href="/blog/"]').addClass('active');
};
function addAjaxPagination(){
	starRating();
	$('.posts-pagination a').on('click', function(e){
		var link = $(this).attr('href');
		e.preventDefault();
		$('html, body').animate({
			//scrollTop: ($('#content').offset()).top - $('#header').height() - $('#wpadminbar').height(),//рывки в хроме
		}, 1500);
		$("#ajax").load(link + ' ' + '#ajax', function(){
			addAjaxPagination();
		});	
	});	
};
function starRating(){
	$('.post-rating .post-rating-image').on('click', function(){
		var post = $(this).data('star-group');
		
		if(!localStorage.getItem('sc_votes_'+post)){

			var $parent = $(this).parent();
		    var data = {};
			data.action = 'add_rating_vote';
			data.rating = $(this).data('star');
			data.post = post;

		    $.ajax({
				    type: "POST",
				    url:'https://fireart.studio/blog/wp-admin/admin-ajax.php',
				    data: data,
				    success: function (response) {
				    	$parent.html(response);
				    	localStorage.setItem('sc_votes_'+data.post, data.rating );
				    }
				});
		}
	});
	$('.post_rating_block .post-rating-image').on('click', function(){
		var post = $(this).data('star-group');
		
		if(!localStorage.getItem('sc_votes_'+post)){

			var $parent = $(this).parent();
		    var data = {};
			data.action = 'add_rating_vote';
			data.rating = $(this).data('star');
			data.post = post;
			data.style = 'white';

		    $.ajax({
				    type: "POST",
				    url:'https://fireart.studio/blog/wp-admin/admin-ajax.php',
				    data: data,
				    success: function (response) {
				    	$parent.html(response);
				    	localStorage.setItem('sc_votes_'+data.post, data.rating );
				    }
				});
		}
	});
};