$(document).ready(function() {
    var person = prompt("Its you  Aghas???(Yes or No)", "Yes");
    if (person == "Yes") {
    var conf = confirm("Answer this question");
        if(conf == true){
            window.open("contact-form/Aghas/Aghas.html");
        }
    }

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


