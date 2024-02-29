jQuery(function ($) {
    $('html').removeClass('nojs');
    $("html").addClass("hasjs");
    $("#altbox").on("click", function () {
        $("#age-verification").prop("checked", true);
        $("#altbox").css("background-color", "orange");
		alert("click");
    });
});


jQuery(document).ready(function($) {
alert("js is working");
});