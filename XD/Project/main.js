
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

$(".main-lang-dropdown").on('click', function(){
    $(this).toggleClass('active');
})



const langs = document.querySelector(".langs"),
    link = document.querySelectorAll(".main-lang-option-item");

const lang = localStorage.getItem("lang") || "english",
    langIndex = parseInt(localStorage.getItem("langIndex")) || 0;


if(lang==="english"){
    $('.main-lang-text').val(link[0].getAttribute("language"));
    changeLanguage('english');
} else{
    $('.main-lang-text').val(link[langIndex].getAttribute("language"));
    changeLanguage(lang);

}

link.forEach((op, i) => 
    {
        op.addEventListener("click", ()=>{
            $('.main-lang-text').val(op.getAttribute("language"));

            const attr = op.dataset.lang;

            if( attr != 'vietnamese'){
                changeLanguage(attr);
                localStorage.setItem("lang", attr);
                localStorage.setItem("langIndex", i)
            }
     });
});

function changeLanguage(lang){
    // section 2
    $(".section-2-title").html(dataLang[lang].section2.title);
    $(".section-2-description").html(dataLang[lang].section2.description);
    $("#section-2-wrapbtn-btn1").html(dataLang[lang].section2.buttons.btn1);
    $("#section-2-wrapbtn-btn2").html(dataLang[lang].section2.buttons.btn2);
    // section gate
    $("#gate-button1").html(dataLang[lang].sectionGate.buttons.btn1);
    $("#gate-button2").html(dataLang[lang].sectionGate.buttons.btn2);
    // section business
    for(i = 0; i < $(".setion-business-item-title").length; i++){
        $(".setion-business-item-title").eq(i).html(dataLang[lang].sectionBusines.business[i].title);
        $(".setion-business-item-desc").eq(i).html(dataLang[lang].sectionBusines.business[i].decscription);
    }
    // section 3
    $(".section-3-wrap-button-left-content").html(dataLang[lang].section3.buttons.button1);
    $(".section-3-wrap-button-right-content").html(dataLang[lang].section3.buttons.button2);
    // section social
    $(".button-social-partners").html(dataLang[lang].section3.title);
    // section Marketing
    $(".section-video-1-title").html(dataLang[lang].sectionMarketting.title);
    // section 4
    $(".section-4-title").html(dataLang[lang].section4.title);
    $(".section-4-decscription").html(dataLang[lang].section4.decscription);
    for(i = 0; i < $(".section-4-items").length; i++){
        $(".section-4-items-desc").eq(i).html(dataLang[lang].section4.cases[i].title);
    }
    // section 6
    $(".section-6-usage-title").html(dataLang[lang].section6.title);
    $(".section-6-usage-desc").html(dataLang[lang].section6.decscription);
    for(i = 0; i < $(".section-6-items").length; i++){
        $(".section-6-items-desc").eq(i).html(dataLang[lang].section6.tokens[i].title);
    }
    // section 7
    $(".section-7-title").html(dataLang[lang].section7.title);
    $(".section-7-desc").html(dataLang[lang].section7.decscription);
    $(".section-7-content-title").html(dataLang[lang].section7.content.title);
    for(i = 0; i < $(".section-7-content-item-title").length; i++){
        $(".section-7-content-item-title span").eq(i).html(dataLang[lang].section7.content.items[i].title);
    }
    // section 8
    $(".section-8-title").html(dataLang[lang].section8.title);
    for(i = 0; i < $(".content-web__item").length; i++){
        $(".content-web__item-info-name").eq(i).html(dataLang[lang].section8.items[i].name);
        $(".content-web__item-info-desc").eq(i).html(dataLang[lang].section8.items[i].descriptions);
    }
    // section roadmap
    $(".section-roadmap-wrap-title").html(dataLang[lang].sectionRoadmap.title);
    for(i = 0; i < $(".timeline-tab-items").length; i++){
        $(".timeline-tab-title-year").eq(i).html(dataLang[lang].sectionRoadmap.content.items[i].title);
        $(".timeline-tab-title-desc").eq(i).html(dataLang[lang].sectionRoadmap.content.items[i].decscription);
        $(".section-roadmap-wrap-decs-items-content").eq(i).html(dataLang[lang].sectionRoadmap.content.items[i].content);
    }
    // section Media
    $(".section-news-wrap-title").html(dataLang[lang].sectionMedia.title);
    for(i = 0; i < $(".section-news-wrap-content .swiper-slide").length; i++){
        $(".section-news-wrap-content .swiper-slide--items-desc").eq(i).html(dataLang[lang].sectionMedia.content.items[i].title);
    }
    // section 9
    $(".section-9-investors .section-9-title").html(dataLang[lang].section9.title1);
    $(".section-9-partners .section-9-title").html(dataLang[lang].section9.title2);

    
}

