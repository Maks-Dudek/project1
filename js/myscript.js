jQuery(function ($) {
    $('html').removeClass('nojs');
    $("html").addClass("hasjs");
    $("#age-verification").on("click", function () {
        $("#age-verification").prop("checked", true);
        $("#altbox").html("<p>&#10004;</p>");
		alert("click");
    });
});

jQuery(document).ready(function($) {
alert("js is working");
});