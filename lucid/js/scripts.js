$(".section").height($(window).height());

$("#arrow-home").click(function () {
    $('html, body').animate({
        scrollTop: $("#section-ride").offset().top
    }, 1000);
});

$("#arrow-ride").click(function () {
    $('html, body').animate({
        scrollTop: $("#section-floor-plan").offset().top
    }, 1000);
});

$("#arrow-floor-plan").click(function () {
    $('html, body').animate({
        scrollTop: $("#section-reservation").offset().top
    }, 1000);
});
