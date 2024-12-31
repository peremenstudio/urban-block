// -----------------------------------------------------------------------------
// Main Javascript
// -----------------------------------------------------------------------------
(function($) {
    "use strict";

    // Preloader
    // ----------------------------------------
    $(window).on('load', function(){
        if($('#preloader').length > 0){
            $('#preloader').fadeOut('slow',function(){$(this).remove();});
        }
    });

    $(document).on('ready', function() {

        // Animating the navbar toggle
        // ----------------------------------------
        $('.navbar-toggle').on('click', function () {
            $(this).toggleClass('active');
        });

        // Sliders
        // ----------------------------------------

        // home splash slider
        if($('.splash-slider').length > 0){
            $('.splash-slider').owlCarousel({
                singleItem: true,
                transitionStyle: 'fade',
                slideSpeed: 1000,
                autoPlay: 5000,
                mouseDrag: false,
                pagination: false,
                navigation: false
            });
        }

        // simple gallery slider
        if($('.gallery-slider').length > 0){
            $('.gallery-slider').owlCarousel({
                singleItem: true,
                slideSpeed: 1000,
                autoPlay: 5000,
                mouseDrag: false,
                pagination: true
            });
        }

        // full width gallery slider
        if($('.full-gallery-slider').length > 0){
            $('.full-gallery-slider').owlCarousel({
                itemsDesktop: [1199,4],
                itemsDesktopSmall: [992,3],
                itemsTablet: [768,3],
                itemsMobile: [479,1],
                slideSpeed: 1000,
                autoPlay: 5000,
                pagination: false,
                navigation: true,
                navigationText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
            });
        }

        // testimonials slider
        if($('.testimonials-slider').length > 0){
            $('.testimonials-slider ').owlCarousel({
                singleItem: true,
                transitionStyle: 'fade',
                slideSpeed: 1000,
                autoPlay: 5000,
                mouseDrag: false,
                pagination: true,
                navigation: false
            });
        }

        // Progress
        // ----------------------------------------
        if($('.progress-circle').length > 0){
            $('.progress-circle').circleProgress({
                size: 140,
                startAngle: -Math.PI / 2,
                thickness: 8,
                emptyFill: "rgba(0, 0, 0, .05)",
                fill: {
                    color: "#fff"
                }
            });
        }

        // Gallery Popup
        // ----------------------------------------

        // image popup
        if($('.popup').length > 0){
            $('.popup').magnificPopup({
              type: 'image'
            });
        }

        // video popup
        if($('.popup-video').length > 0){
            $('.popup-video').magnificPopup({
                type: 'iframe'
            });
        }
    });
})(jQuery);


