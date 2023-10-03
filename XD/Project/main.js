new Swiper('.swiper-member', {
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
     breakpoints: {
        0: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        }
    }
});