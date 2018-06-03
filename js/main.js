;(function($) {
	"use strict";

	var introSlider = $('.ba-intro-slider'),
		bgSlider = $('.ba-bg-slider');

	introSlider.slick({
		prevArrow:'.ba-intro-slider-prev',
		nextArrow:'.ba-intro-slider-next',
		asNavFor:bgSlider,
		dots:true,
		appendDots:'.ba-intro-slider-nav'
	});

	bgSlider.slick({
		arrows:false,
		asNavFor:introSlider,
		fade:true

	});

	var nav = $('.ba-nav'),
		menuToggle = $('.ba-menu-toggle');
		
		menuToggle.on('click', function(e){
			e.preventDefault();
			nav.toggleClass('ba-open');
		});

	$('[data-modal]').on('click', function(e){
		e.preventDefault();
		var modalId = $(this).attr('href');
		$(modalId).toggleClass('ba-modal-open');


	})

	$('[data-overlay]').on('click', function(e){
		$('.ba-modal-open').removeClass('ba-modal-open');

	})


// Init magnific pop-up
	
	$('[data-modal-video]').magnificPopup({
		
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		
	});



})(jQuery);

