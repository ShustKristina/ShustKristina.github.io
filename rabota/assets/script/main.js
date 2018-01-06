$(window).on('load', function() {
    var $preloader = $('#preloader');
    $preloader.delay(600).fadeOut('slow');

    var $preloadHola = $('#preloadHola');
    $preloadHola.delay(400).animate({ opacity: 0 })
})
