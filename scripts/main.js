$(document).ready(function(){
    $("#main-logo").click(function(){
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 1000);
    });
    $("#btn-contd").click(function(){
        $('html, body').animate({
            scrollTop: $("#conditions").offset().top
        }, 1000);
    });
    $("#btn-prc").click(function(){
        $('html, body').animate({
            scrollTop: $("#prices").offset().top
        }, 1000);
    });
    $("#btn-contc").click(function(){
        $('html, body').animate({
            scrollTop: $("#contacts").offset().top
        }, 1000);
    });
    $("#btn-next-main").click(function(){
        $('html, body').animate({
            scrollTop: $("#conditions").offset().top
        }, 1000);
    });
});