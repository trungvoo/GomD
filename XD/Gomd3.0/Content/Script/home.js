$(function () {
    swiperGomdX();
    swiperGomdClip();
});

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
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.3,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 148,
                    modifier: 2,
                    scale: 1.05,
                    slideShadows: true
                }

            },
            768: {
                slidesPerView: 3,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 50,
                    modifier: 3,
                    scale: 1,
                    slideShadows: true
                },
            }
        }
    });
};

// Swiper Gomd Clip
function swiperGomdClip() {
    new Swiper('.swiper-gomdClip', {
        spaceBetween: 0,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-gomdClip-btn-next',
            prevEl: '.swiper-gomdClip-btn-prev',
        },
        loop: true,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.3,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 148,
                    modifier: 2,
                    scale: 1.05,
                    slideShadows: true
                }

            },
            768: {
                slidesPerView: 3,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 50,
                    modifier: 3,
                    scale: 1,
                    slideShadows: true
                },
            }
        }
    });
};

