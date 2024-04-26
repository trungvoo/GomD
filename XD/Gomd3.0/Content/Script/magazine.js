$(function () {
    eventClickTabs();
    $(".button-stick-on-top").on('click', function () {
        $("html, body").animate({ scrollTop: "0" }, 500);
    });
});

function eventClickTabs() {
    $(".tab-items input").on('click', function () {
        tabId = $(this).data("id");
        $(".magazine-content").removeClass("magazine-content--active");

        $("#" + tabId).addClass("magazine-content--active");
    });
}