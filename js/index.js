$(document).ready(function () {

    $('#main').transition('fade up in', 2000);

    $("#learnMore").click(function () {
        $('html, body').animate({
            scrollTop: $("#info").offset().top
        }, 1000);
    });
    
    if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
        skrollr.init({
            forceHeight: false,
            smoothScrolling: true
        });
    } else {
        $('#learnMore').remove();
    }
});
