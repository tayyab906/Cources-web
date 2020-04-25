


'use strict';

(function($) {
	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch-warp').on('click', function() {
		$('.header-section, .nav-switch').addClass('active');
		$('.main-warp').addClass('overflow-hidden');
	});

	$('.header-close').on('click', function() {
		$('.header-section, .nav-switch').removeClass('active');
		$('.main-warp').removeClass('overflow-hidden');
	});



})(jQuery);
