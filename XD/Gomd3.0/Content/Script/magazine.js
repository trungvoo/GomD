$(function () {
    eventClickTabs();
});

function eventClickTabs() {
    $(".tab-items input").on('click', function () {
        tabId = $(this).data("id");
        $(".magazine-content").removeClass("magazine-content--active");

        $("#" + tabId).addClass("magazine-content--active");
    });
}