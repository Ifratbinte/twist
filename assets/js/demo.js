(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

		 $(".team-slider").owlCarousel({
			items: 3,
			loop: true,
			dots: true,
			autoplay: false
		})
    });


    jQuery(window).load(function(){

        
    });
    
}(jQuery));	


$("#cssmenu").menumaker({
    title: "Menu"
});
