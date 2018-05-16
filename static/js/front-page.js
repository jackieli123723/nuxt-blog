$(document).ready(function(){
	addAjaxFilter();
	addAjaxCat();
	changeUrl(window.location.href);	
	autoFilter();
});	
function autoFilter(){
	var filter_name = (document.location.toString().split('#'))[1],
		$label = $('input[value="' + filter_name + '"]').parent();
	$label.trigger("click");	
	//console.log(filter_name);	
};
function setActiveTabs(slug){
	if (slug == undefined) {
		slug = 'all';
	};
	$('#blog-tabs li').removeClass('active-tab');
	$('#blog-tabs input[value="'+slug+'"]').parent().parent().addClass('active-tab');	
}
function changeUrl(link){
	var href = link.replace('?cat=', '#');
	history.pushState(null, null, href);
	setActiveTabs((link.split('?cat='))[1]);
};
function addAjaxCat(){
	$('.post-cat a').on('click', function(e){
		var link = $(this).attr('href');
		changeUrl(link);		
		e.preventDefault();
		$('html, body').animate({
			scrollTop: ($('#content').offset()).top - $('#header').height() - $('#wpadminbar').height(),
		}, 1500);
		$("#ajax").load(link + ' ' + '#ajax', function(){
			addAjaxCat();
			addAjaxPagination();
		});	
	});	
	$('.hidden-link').on('click', function(){
		var link = $(this).data('url');
		changeUrl(link);		

		$('html, body').animate({
			scrollTop: ($('#content').offset()).top - $('#header').height() - $('#wpadminbar').height(),
		}, 1500);
		$("#ajax").load(link + ' ' + '#ajax', function(){
			addAjaxCat();
			addAjaxPagination();
		});	
	});	
};
function addAjaxFilter(){
	var href,
		val;
	$('#blog-tabs input').on('change', function(){	
		val = '#' + $(this).attr('value');
		if (val == '#all') {
			val = '';
		};
		href = (window.location.href.split('#'))[0] + val;	
		//console.log($('#form-cat').attr('action'));		
		$('#form-cat').submit();
		$('#blog-tabs li').removeClass('active-tab');		
		$(this).parent().parent().addClass('active-tab');
	});
	var options = { 
    	//url: $('#form-cat').attr('action'),
    	url: 'https://fireart.studio/blog/',
        success: function(html){
        	$('#ajax').html($(html).find('#ajax').html());
        	setTimeout(function(){
        		addAjaxCat();
        		addAjaxPagination();       		
        	}, 100);
        	//history.pushState(null, null, href);
        },  
    };
	$('#form-cat').ajaxForm(options);
};