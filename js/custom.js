/*######################################
				SERVICES
#######################################*/
$(function () {

    // animate on scroll
    new WOW().init();

});
/*######################################
				WORK
#######################################*/

$(function () {

    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    })

});

/*######################################
				TEAM
#######################################*/
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSeed: 700,
        loop: true,
        autoplayHoverPause: true
    });

});

/*######################################
				TESTIMONIALS
#######################################*/
$(function () {
    $("#cutomers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});


/// Default ////
// $(function () {

// });