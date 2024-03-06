
$(document).ready(function() { 
  var id = '#dialog';
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();
  $('#mask').css({'width':maskWidth,'height':maskHeight}); 
  $('#mask').fadeIn(500); 
  $('#mask').fadeTo("slow",0.9); 
        var winH = $(window).height();
  var winW = $(window).width();
        $(id).css('top',  winH/2-$(id).height()/2);
  $(id).css('left', winW/2-$(id).width()/2);
     $(id).fadeIn(500);  
     $('.window .close').click(function (e) {
  e.preventDefault();
  $('#mask').hide();
  $('.window').hide();
     });  
     $('#mask').click(function () {
  $(this).hide();
  $('.window').hide();
 });  
 
});


new Swiper('.swiper-user-case', {
    spaceBetween: 0,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.section-video-1-content-wrap .swiper-btn-next',
        prevEl: '.section-video-1-content-wrap .swiper-btn-prev',
    },
     breakpoints: {
        0: {
            slidesPerView: 2.1
        },
        668: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 5
        }
    }
});

new Swiper('.swiper-token', {
    spaceBetween: 0,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.section-video-1-content-wrap .swiper-btn-next',
        prevEl: '.section-video-1-content-wrap .swiper-btn-prev',
    },
     breakpoints: {
        0: {
            slidesPerView: 2.15
        },
        668: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        }
    }
});

new Swiper('.swiper-member', {
    spaceBetween: 0,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-member-btn-next',
        prevEl: '.swiper-member-btn-prev',
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
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-video-btn-next',
        prevEl: '.swiper-video-btn-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1.15
        },
        591: {
            slidesPerView: 1.15
        }, 
        751: {
            slidesPerView: 2.15
        }, 
        991: {
            slidesPerView: 3
        },
        1100: {
            slidesPerView: 3
        }
    }
});

new Swiper('.swiper-business', {
    spaceBetween: 0,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-video-btn-next',
        prevEl: '.swiper-video-btn-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1.25
        },
        591: {
            slidesPerView: 2.25
        }, 
        751: {
            slidesPerView: 3
        }, 
        991: {
            slidesPerView: 4
        },
        1100: {
            slidesPerView: 5
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

new Swiper('.swiper-marquee-bottom', {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 5000,
    autoplay: {
        delay: 1,
    },
    loop: true,
    loopedSlides: 3,
    slidesPerView:'auto',
    allowTouchMove: false,
    disableOnInteraction: true
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

