$(document).ready(function() {

	set_w_margin();
	set_logo_opac();
	fixed_nav();	

	//.works_item_img on hover -> show the description div
	var worksImgOpac;//save  the preset opacity
	$('.works_item_img').on('mouseenter', function(){	
		$(this).closest('.works_item').stop(true, true).animate({width: '+=20', height: '+=20', margin: '-=10'}, 0);
		$(this).find('img').stop(true, true).animate({width: '+=20', height: '+=20'}, 0);
		$(this).closest('.works_item').find('.works_item_description').stop(true, true).fadeIn(0);
	
	}).on('mouseleave', function(){
		$(this).closest('.works_item').stop(true, true).animate({width: '-=20', height: '-=20',margin: '+=10'}, 0);	
		$(this).find('img').stop(true, true).animate({width: '-=20', height: '-=20'}, 0);
		$('.works_item_description').fadeOut(0);
	});

	//effect of the nav text
	$('nav').css({opacity: 0}).animate({opacity: 1}, 1800);
	$('#scroll_down').css({opacity: 0}).animate({opacity: 1}, 1800);

	//when click on tho scroll down arrow
	$('#scroll_down').on('click', function(event){
		var offset = $('#works').offset().top;
		$('body,html').animate({scrollTop: offset}, 800);
		event.preventDefault();
	});

	//assign the highlight class to the correct li in the nav
	// Cache selectors
    nav = $('nav');
    // All list items
    menuItems = nav.find('a');
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });
    // Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
		var href = $(this).attr("href"),
			offsetTop = href === "#" ? 0 : $(href).offset().top;
		$('html, body').stop().animate({ 
		  scrollTop: offsetTop}, 600);
		e.preventDefault();
	});

});

//on scroll
$(window).scroll(function(){
	set_logo_opac();
	fixed_nav();
});

function set_logo_opac(){
	//set div#logo opacity as scoll down
	var l = $('#logo');
	var scrollAmount = $(window).scrollTop();
	var height = l.height();
	if( (height - scrollAmount) >= 0 ){
		var opac = (height - scrollAmount)/(height);
		l.css({opacity: opac});
	}	
}


//set nav to fixed when scroll enough
function fixed_nav(){
	var nav = $('nav');
	var scrollAmount = $(window).scrollTop();
	var navOffset = nav.offset().top;
	if( navOffset - scrollAmount < 0){
		$('nav').css({position: 'fixed', top: 0});
		$('#scroll_up').fadeIn();
	}
	if(scrollAmount <= $('#logo').offset().top + $('#logo').height() - 68){	
			$('nav').css({position: 'relative', top: - 68});
			$('#scroll_up').fadeOut();
	}
}

//on resize
$(window).resize(function() {
	set_w_margin();
});

//set the margin to flil the space
function set_w_margin(){

	//set works_item marginLeft and Right
	var small_style_width = 650 -15 ;
	var w_width = $(window).width();
	var w = 0;

	if( w_width < small_style_width){ vp = 0; }

	w = (w_width - (300*3)) /6;
	if(w < 8){
		w = (w_width - (300*2)) /4;
	}
	if(w < 8){
		w = (w_width - 300) /2;
	}
	$('.works_item').animate({marginLeft: w, marginRight: w}, 200);/*must be in 0 time*/

	//set marginTop and marginBottom of #works_content
	var h = ($(window).height() - $('#works_content').height() - -$('#title').height) / 2;
	if(h <= 60){h = 60;}
	$('#works_content').css({marginTop: h+34, marginBottom: h});//32 cause of the nav height
}