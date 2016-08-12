$(document).ready(function() {

	$('body').fadeIn(400);
	set_w_margin();


	//.works_item_img on hover -> show the description div
	$('.works_item_img').on('mouseenter', function(){
		$(this).find('img').stop(true, true).animate({opacity: 1});
		$(this).closest('.works_item').find('.works_item_description').stop(true, true).fadeIn();
	}).on('mouseleave', function(){
		$(this).find('img').stop(true, true).animate({opacity: 0.65});
		$('.works_item_description').stop(true, true).fadeOut();
	});

	//when click on the logo smooth scroll to the top
	$('#logo').find('img').on('click', function(event){
		$('body,html').animate({scrollTop: 0}, 400);
		event.preventDefault();
	});

	//when click on to_top smooth scroll to the top
	$('.to_top').on('click', function(event){
		$('body,html').animate({scrollTop: 0}, 400);
		event.preventDefault();
	});

	//effect of the nav text
	$('nav').find('li').css({opacity: 0});
	$('nav').find('li').animate({opacity: 1}, 1800);

	//nav mouseenter and mouseleave font size // .stop(true, true) stop the current animation, clear animation queue, jump to end 
	$('nav').find('li').find('a').on( 'mouseenter', function(){
		if(!$(this).hasClass('highlight')){
			$(this).stop(true, true).addClass('hover', 150);
		}
	}).on( 'mouseleave', function(){
		$(this).stop(true, true).removeClass('hover', 150);
	});

	//assign the highlight class to the correct li in the nav
	// Cache selectors
	var lastId;
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
			offsetTop = href === "#" ? 0 : $(href).offset().top+1;
		$('html, body').stop().animate({ 
		  scrollTop: offsetTop
		}, 400);
		e.preventDefault();
	});
	// Bind to scroll
	$(window).scroll(function(){
		// Get container scroll position
		var fromTop = $(this).scrollTop();
	   
	    // Get id of current scroll item
	    var cur = scrollItems.map(function(){
			if ($(this).offset().top <= fromTop)
		    return this;
	    });
	    // Get the id of the current element
	    cur = cur[cur.length-1];
		var id = cur && cur.length ? cur[0].id : "";
	   
		if (lastId !== id) {
			oldId = lastId;
			lastId = id;
			// Set/remove active class
			menuItems.filter("[href=#"+oldId+"]").removeClass('highlight', 150);
			menuItems.filter("[href=#"+lastId+"]").addClass('highlight', 100);
		}
	});

	//when click on language
	$('#language').on('mouseenter', function(){
		$('#language_content').fadeIn(100);
	}).on('mouseleave', function(){
		$('#language_content').fadeOut(100);
	});

	/*
	//.title slide as coming
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
    	var elementOffset = $('#contacts').offset().top;
    	var disTop = (elementOffset - scrollTop);
		var wh = $(window).height();
		var ww = $(window).width();
		var percentH = (disTop*100)/wh;
		var margin = (percentH*ww)/100;
		if(margin <= 30){ margin = 0; };
		$('#contacts_container').animate({marginLeft: margin}, 0);
	});
	*/

});

//on resize
$(window).resize(function() {
	set_w_margin();
});

//set the margin to fiil the space
function set_w_margin(){


	//set works_item marginLeft and Right
	var small_style_width = 650 -15 ;
	var w_width = $(window).width();
	var w = 0;

	var vp = (w_width * 20)/100;
	if( w_width < small_style_width){ vp = 0; }

	w = (w_width - vp - (300*3)) /6;
	if(w < 8){
		w = (w_width - vp - (300*2)) /4;
	}
	if(w < 8){
		w = (w_width - vp - 300) /2;
	}
	$('.works_item').animate({marginLeft: w, marginRight: w}, 0);/*must be in 0 time*/

	//set the marginTop e marginBottom of the #home to center
	if( w_width > (small_style_width) ){//otherwise the style_XXX will care of it
		var h = $(window).height();
		if( h < 450 ) { h = 450; }
		$('#works').css({marginTop: h});
	}
	else{
		$('#works').css({marginTop: 60});
	}

	//set the margin to center vertically #works_content, if less tha 20 leave it at 20 by the css
	var mw = (h - $('#works_content').height())/2;
	if(mw < 20){ mw = 20; }
	t = mw - $('.title').height();
	if( t < 20){ t = 20; }
	$('#works_content').animate({marginTop: t, marginBottom: mw}, 100);
}