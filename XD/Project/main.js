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
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        0: {
            slidesPerView: 2.2
        },
        768: {
            slidesPerView: 4
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


$(".swiper-slide--items").on('click', function(){
    var boolHasMedia = $(this).data("media-has");
    if(boolHasMedia == true){
        var srcMedia = $(this).data("media-src");
        if($("#embed-main-media").attr("src") != srcMedia){
            var widthMedia = $(this).data("media-width");
            var heightMedia = $(this).data("media-height");
            $("#embed-main-media").attr("src", srcMedia);
        }
    }
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