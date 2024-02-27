jQuery(function ($) {
    $('html').removeClass('nojs');
    $("html").addClass("hasjs");
    $("#altbox").on("click", function () {
        $("#age-verification").prop("checked", true);
        $("#altbox").html("<p>&#10004;</p>");
    });
});