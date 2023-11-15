//$(function () {
//	$("html, body").animate({scrollTop: 0}, 0);
//	$(window).scroll(function() {
//	   if($(window).scrollTop() + $(window).height() > ($(document).height() - 100) ) {
//		   $(".arrow-bottom").addClass("backtoTOP");
//	   }
//	   else {
//		   $(".arrow-bottom").removeClass("backtoTOP");
//	   }
//	   
//	}); 
//	
//	$('.arrow-bottom').click(function(){
//		if (!this.classList.contains('backtoTOP')){
//			const headerH = $('#header').outerHeight();
//		
//			// Get the height of the viewport
//			var windowHeight = $(window).height() - 20;
//			
//			// Find the next section based on current scroll position
//			var currentScrollTop = $(window).scrollTop();
//			var currentSection = Math.floor(currentScrollTop / windowHeight);
//			var nextSection = currentSection + 1;
//						
//			// Calculate the scroll position for the next section
//			var scrollToPosition = nextSection * windowHeight;
//
//			// Animate the scroll to the next section
//			$('html, body').animate({ scrollTop: scrollToPosition }, 500);
//		}
//		else {
//			$("html, body").animate({scrollTop: 0}, 1000);
//		}
//		
//	});
//});