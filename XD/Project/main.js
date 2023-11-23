new Swiper('.swiper-member', {
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: '.section-video-1-content-wrap .swiper-btn-next',
        prevEl: '.section-video-1-content-wrap .swiper-btn-prev',
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

new Swiper('.swiper-media-1', {
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: '.swiper-media-1 .swiper-btn-next',
        prevEl: '.swiper-media-1 .swiper-btn-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1.15
        },
        768: {
            slidesPerView: 3
        }
    }
});


new Swiper('.swiper-news', {
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-news-btn-next',
        prevEl: '.swiper-news-btn-prev',
    },
    loop: true,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 148,
                modifier: 4,
                slideShadows: true
            }

        },
        768: {
            slidesPerView: 3,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 4,
                slideShadows: true
            },
        }
    }
});


const animatedEls = document.querySelectorAll("[data-animation]");

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		const animation = entry.target.getAttribute("data-animation");

		if (entry.isIntersecting) {
			entry.target.classList.add("animated", `${animation}`);
		} 
        // else {
		// 	entry.target.classList.remove("animated", `${animation}`);
		// }
	});
});

animatedEls.forEach((el) => observer.observe(el));


$(window).on('load', function () {
    console.log("true")
});


function clickRoadMap(element){
    var parent = $(element).parents(".timeline-tab-items");
    var idTab = $(element).parents(".timeline-tab-items").data("id-tab");
    if($(".timeline-tab-items--active").data("id-tab") != idTab){
        $(".timeline-tab-items").removeClass("timeline-tab-items--active");
        parent.addClass("timeline-tab-items--active");

        $(".section-roadmap-wrap-decs-items").removeClass("section-roadmap-wrap-decs-items--active");
        $(".section-roadmap-wrap-decs-items[data-id-tab=" + idTab + "]").addClass("section-roadmap-wrap-decs-items--active")
    }
}