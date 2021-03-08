(function($) {
	'use strict';
	/*ToTop*/
	$().UItoTop({ easingType: 'easeOutQuart' });
	/*WOW init */
	new WOW().init();
	/*prettyPhoto */
	$("a[data-pretty^='prettyPhoto']").prettyPhoto();		
	$(".video:first a[data-pretty^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'pp_default',slideshow:3000, autoplay_slideshow: false});
	$(".video:gt(0) a[data-pretty^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
	/*ticker*/
	$('.ticker').list_ticker({speed:5000,effect:'fade'});
	/*Flex Slider */
	$('.flexsliderbg').flexslider({
        animation: "fade",
		directionNav: false,
		controlNav: false,
		slideshow: true, 
    });
	  
    $('.flexslider').flexslider({
        animation: "fade",
		directionNav: false,
		controlNav: true,
		slideshow: true, 
    });
	  
    $('.tablet-device').flexslider({
        animation: "slide",
		directionNav: true,
		controlNav: false,
		slideshow: true, 
    });
    /*parallax*/
    $('.home-wrapper').parallax("50%", 0, 0.1, true);
	$('#testimoni').parallax("50%", 0, 0.1, true);
	$('#pricing').parallax("50%", 0, 0.1, true);
	$('#intro').parallax("50%", 0, 0.1, true);
	/*
	tooltip
	=========================== */
	$('.tooltips').tooltip({
		selector: "a[data-toggle^=tooltip]"
	})
	
	/*
	Team
	=========================== */		
	$(".team-caption").css({'opacity':'0','filter':'alpha(opacity=0)'});
	$('.team-wrapper').hover(
		function() {
			$(this).find('.team-caption').stop().fadeTo(800, 1);
		},
		function() {
			$(this).find('.team-caption').stop().fadeTo(800, 0);
		}
	)
	
	/* Client logo.png hover
	=========================== */	
	$(".logo.png-hover").css({'opacity':'0','filter':'alpha(opacity=0)'});	
	$('.client-link').hover(function(){
				$(this).find('.logo.png-hover').stop().fadeTo(900, 1);
				$(this).find('.client-logo.png').stop().fadeTo(900, 0);
	}, function() {
				$(this).find('.logo.png-hover').stop().fadeTo(900, 0);
				$(this).find('.client-logo.png').stop().fadeTo(900, 1);
	});	
	
	/*Nivo Slider */
	$('.screenshots-nvio').nivoSlider();
	
})(jQuery);

// fitVideo
(function($) {
    "use strict";
    $(".player,.video-container").fitVids({ customSelector: "iframe[src^='https://w.soundcloud.com']"});
	$('.background').each(function() {
		if (! isMobile.any() ) {
			$(this).parallax('50%', 0.22, true);
		}else {
                
		$(this).css('background-attachment','initial');
		}
	})

}(jQuery));