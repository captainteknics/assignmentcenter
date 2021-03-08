(function($) {
	'use strict';	
			$('.blog_slider').each(function(index){
				var $slider = $(this);
				$slider.carouFredSel({
					prev: '#'+$slider.data('previd'),
					next: '#'+$slider.data('nextid'),
					auto: false,
					responsive: true,
					width: '100%',
					scroll: 1,
					items: {
						width: 400,
					height: 'auto',	//	optionally resize item-height
						visible: {
							min: 1,
							max: 8
						}
					}
				});
			});
})(jQuery);