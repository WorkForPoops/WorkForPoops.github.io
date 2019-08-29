new WOW().init();

//smooth scroll

//$(function(){
//        $("a[href^='#']").click(function(){
//                var _href = $(this).attr("href");
//                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
//                return false;
//        });
//});


$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});