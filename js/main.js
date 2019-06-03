/*global $*/
/*global console */
$(document).ready(function () {
    "use strict";
//Loading     
    $(window).on("load", function () {
        $(' .sk-circle').fadeOut(200, function () {
            $(this).parent().fadeOut(200, function () {
                $(this).remove();
            });
        });
    });
    
//Nice Scroll
    $("body").niceScroll({
        cursorcolor: "rgba(82, 78, 78, .3)",
        cursorwidth: "10"
    });
    
//Fixed Navbar
    $(window).scroll(function () {
        var nav = $('.navbar');
        if ($(window).scrollTop() >= nav.height()) {
            nav.addClass('scrolled');
        } else {
            nav.removeClass('scrolled');
        }
    });
    
//Show Tabs
    $('.tab .square').on('click', function () {
        $(this).addClass("active").siblings().removeClass("active");
        $('.tabs-content > div').hide();
        $('.' + $(this).data('class')).show();
    });
    
//Button Scroll Top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $("#scroll-top").show();
        } else {
            $("#scroll-top").hide();
        }
    });
    $("#scroll-top").click(function () {
        $('html,body').animate({scrollTop : 0}, 1000);
    });
    
//Wow Js
    new WOW().init();
});