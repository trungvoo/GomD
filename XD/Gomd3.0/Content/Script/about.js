$(function () {
    eventClickTabs();
});

function eventClickTabs() {
    $(".tab-items input").on('click', function () {
        tabId = $(this).data("id");
        $(".tabs-content-items").removeClass("tab__content--active");
        $("#" + tabId).addClass('tab__content--active');
    });
}