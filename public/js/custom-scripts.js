	
	/*-------Counter Numbers-------*/
	( function ( $ ) {
		'use strict';
	   if($(".counter").length != 0) {
			$(".counter").counterUp({
				delay: 5,
				time: 1000
			});
		}
		
		/*-------Loader Wrapper-------*/
		var loader_wrapper =
		document.getElementById("loader_wrapper");
		window.addEventListener("load", function()
		{
			loader_wrapper.style.display = "none";
		});
		
		
		/*-------External js for Isotope-------*/
		$(window).on('load', function (e) {
		var $gridPortfolio = $('.grid-portfolio').isotope({
			itemSelector: '.element-item',
			transitionDuration: '0.65s',
			layoutMode: 'fitRows',
		});

		// bind filter button click
		$('#filters').on( 'click', 'button', function() {
		  var filterValue = $( this ).attr('data-filter');
		  // use filterFn if matches value
		  $gridPortfolio.isotope({ filter: filterValue });
		});


		// change is-checked class on buttons
		$('.button-group').each( function( i, buttonGroup ) {
			var $buttonGroup = $( buttonGroup );
			$buttonGroup.on( 'click', 'button', function() {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$( this ).addClass('is-checked');
		  });
		});
		
	});

	} ( jQuery ) );
	