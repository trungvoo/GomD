$(function () {
    toggleLanguage();
    swiperGomdX();
});


// Toggle dropdown language
function toggleLanguage() {
    $(".main-lang-dropdown").on('click', function () {
        $(this).toggleClass('active');
    })
};

// Swiper Gomd X
function swiperGomdX() {
    new Swiper('.swiper-gomdX', {
        spaceBetween: 0,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-gomdX-btn-next',
            prevEl: '.swiper-gomdX-btn-prev',
        },
        loop: true,
        // autoplay: {
        //     delay: 3000,
        // },
        breakpoints: {
            0: {
                slidesPerView: 2,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 148,
                    modifier: 4,
                    scale: 1.05,
                    slideShadows: true
                }

            },
            768: {
                slidesPerView: 2,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 180,
                    modifier: 4,
                    scale: 1.05,
                    slideShadows: true
                },
            }
        }
    });
};

//Event click Gomd Official
function eventGomdOfficial(element) {
    // id tabs
    idTab = $(element).data("id-tab");
    // find all tabs item
    itemTabs = $(".GomdOfficial-wrap-tabs-items");
    // find all tabs content
    contentTabs = $(".GomdOfficial-wrap-tabs-content-items");
    // find tab content by id
    contentTabById = $(".GomdOfficial-wrap-tabs-content-items[data-id-content=" + idTab + "]")

    //remove active
    $(itemTabs).removeClass("GomdOfficial-wrap-tabs-items--active");
    $(contentTabs).removeClass("GomdOfficial-wrap-tabs-content-items--active")

    //add active
    $(element).addClass("GomdOfficial-wrap-tabs-items--active");
    $(contentTabById).addClass("GomdOfficial-wrap-tabs-content-items--active")
};