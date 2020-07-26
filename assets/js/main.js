(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

		$(".slider").owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			dots: true,
			autoplay: false,
			navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
		})

        $("#web_design_skill_bar").circleProgress({
			value: 0.9,
			size: 270,
			fill: '#13BDC3',
			thickness: 2
			
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('.count_no').html(Math.round(90 * progress) + '<i>%</i>');
		  });
		 $("#graphic_design_skill_bar").circleProgress({
			value: 0.95,
			size: 270,
			fill: '#13BDC3',
			thickness: 2
			
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('.count_no').html(Math.round(95 * progress) + '<i>%</i>');
		  });
		 $("#digital_marketing_skill_bar").circleProgress({
			value: 0.84,
			size: 270,
			fill: '#13BDC3',
			thickness: 2
			
		}).on('circle-animation-progress', function(event, progress) {
			$(this).find('.count_no').html(Math.round(84 * progress) + '<i>%</i>');
		  });
		  
		 $(".team_slider").owlCarousel({
			items: 3,
			loop: true,
			dots: true,
			autoplay: false
		})
		
		$(".testimonial_slider").owlCarousel({
			items: 3,
			loop: true,
			dots: true,
			autoplay: true
		})
        
        $(".logo-carousel").owlCarousel({
			items: 3,
			loop: true,
			dots: false,
			autoplay: true
		})
        



    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	





$("#cssmenu").menumaker({
    title: "Menu"
});
