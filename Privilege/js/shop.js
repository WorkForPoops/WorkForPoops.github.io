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



$(function () {
$('[data-toggle="popover"]').popover()
});

$(function () {
$('[data-toggle="popover_1"]').popover()
});

$(function () {
$('[data-toggle="popover_2"]').popover()
});

$(function () {
$('[data-toggle="popover_3"]').popover()
});

$(function () {
$('[data-toggle="popover_4"]').popover()
});

$(function () {
$('[data-toggle="popover_5"]').popover()
});

$(function () {
$('[data-toggle="popover_6"]').popover()
});

$(function () {
$('[data-toggle="popover_7"]').popover()
});

$(function () {
$('[data-toggle="popover_8"]').popover()
});

$(function () {
$('[data-toggle="popover_9"]').popover()
});

$(function () {
$('[data-toggle="popover_10"]').popover()
});

$(function () {
$('[data-toggle="popover_11"]').popover()
});

$(function () {
$('[data-toggle="popover_12"]').popover()
});

$(function () {
$('[data-toggle="popover_13"]').popover()
});

$(function () {
$('[data-toggle="popover_14"]').popover()
});

$(function () {
$('[data-toggle="popover_15"]').popover()
});

$(function () {
$('[data-toggle="popover_16"]').popover()
});

$(function () {
$('[data-toggle="popover_17"]').popover()
});

$(function () {
$('[data-toggle="popover_18"]').popover()
});

$(function () {
$('[data-toggle="popover_19"]').popover()
});

$(function () {
$('[data-toggle="popover_20"]').popover()
});

//HAMBURGER

$(document).ready(function () {
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
});
