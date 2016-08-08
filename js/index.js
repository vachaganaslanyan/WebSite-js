$(document).ready(function() {

    $("#contactf").click(function () {
        $(".back, #form").fadeIn();
        center();
    });

    $(".back,.close").click(function () {
        $(".back,#form").fadeOut();
    });

    function center() {
        var form = $("#form");
        var width = $(window).width() / 2 - (form.width() + 30) / 2;
        var heigth = $(window).height() / 2 - (form.height() + 40) / 2;
        form.css({
            "left": width,
            "top": heigth
        });
        return false;
    }


})


