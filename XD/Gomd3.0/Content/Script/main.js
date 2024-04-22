$(function () {
    // toggleLanguage();
    swiperGomdX();
    swiperGomdClip();
    mainAnimationItem();
    eventToggleMenu();
    changeEventBuyIt();
});

function mainAnimationItem() {
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
}

// Toggle dropdown language
function toggleLanguage() {
    $(".main-lang-dropdown").on('click', function () {
        $(this).toggleClass('active');
    });

    const langs = document.querySelector(".langs"),
        link = document.querySelectorAll(".main-lang-option-item");

    const lang = localStorage.getItem("lang") || "english",
        langIndex = parseInt(localStorage.getItem("langIndex")) || 0;


    if (lang === "english") {
        $(".main-lang-img").attr("src", link[0].getAttribute("language-src"));
        $(".main-lang-option-item[data-lang='english']").addClass("d-none");
        // changeLanguage('english');
    } else {
        $(".main-lang-img").attr("src", link[langIndex].getAttribute("language-src"));
        link[langIndex].classList.add("d-none")
        // changeLanguage(lang);

    }

    link.forEach((op, i) => {
        op.addEventListener("click", () => {
            $(".main-lang-img").attr("src", op.getAttribute("language-src"));
            $(".main-lang-option-item").removeClass("d-none");
            op.classList.add("d-none");


            const attr = op.dataset.lang;

            if (attr != 'vietnamese') {
                // changeLanguage(attr);
                localStorage.setItem("lang", attr);
                localStorage.setItem("langIndex", i)
            }
        });
    });
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

//Event Toggle Menu
function eventToggleMenu() {
    $(".main-header-nav-right-menu").click(function (e) {
        if ($(".main-header-nav-left-menu").hasClass("main-header-nav-left-menu--open")) {
            $(".main-header-nav-right-menu i").attr("class", "bx bx-menu")
            $(".main-header-nav-left-menu").removeClass("main-header-nav-left-menu--open");
        }
        else {
            $(".main-header-nav-right-menu i").attr("class", "bx bx-x")
            $(".main-header-nav-left-menu").addClass("main-header-nav-left-menu--open");
        }
    });
};

//Event redirect_url Preparing
function yes_redirect_url(param) {
    if ($(window).width() > 991) {
        if ($(param).attr("href") == "") {
            $(param).parent().addClass("header-nav-left-menu-items--active");
            return false;
        }
        else {
            return true;
        }
    }

}

function yes_redirect_url_staking(param) {
    if ($(param).attr("href") == "") {
        $(param).html("Preparing");
        $(param).css("background", "#ff5100");
        $(param).css("border-color", "#ff5100");
        $(param).css("color", "#fff");
        return false;
    }
    else {
    }
}

function yes_redirect_url_connect(param) {
    if ($(param).attr("href") == "") {
        $(param).html("Preparing");
        return false;
    }
    else {
    }
}

function changeEventBuyIt() {
    $(".collection-main-button button").html("Preparing");
}

if ($(window).width() < 991) {

    $(".header-nav-left-menu-items a[data-pre='reward']").html("Reward (Preparing)");
    $(".header-nav-left-menu-items a[data-pre='staking']").html("Staking (Preparing)");

}


