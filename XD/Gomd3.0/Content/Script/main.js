$(function () {
    // toggleLanguage();
    mainpageStarField();
    mainAnimationItem();
    eventToggleMenu();
    changeEventBuyIt();
});

//star field
function mainpageStarField() {
    const numStars = 1000; // Anzahl der Sterne
    const starField = document.querySelector(".star-field");
    const totalAnimationDuration = 10; // Gesamtanimationdauer in Sekunden

    // Erstellen der Sterne
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        // Zufällige Opazität zwischen 0 und 1 für jeden Stern
        star.style.opacity = Math.random();

        // Zufällige Auswahl der Farbe für 20% der Sterne
        if (Math.random() < 0.1) {
            star.classList.add("colored-star");
            const colors = ["yellow", "blue", "green", "purple", "pink"];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            star.style.backgroundColor = randomColor;
        }

        // Zufällige Animationdauer zwischen 1 und 4 Sekunden für jeden Stern
        star.style.animationDuration = `${Math.random() * 3 + 1}s`;

        // Zufällige Verzögerung zwischen 0 und 10 Sekunden für jeden Stern
        star.style.animationDelay = `${Math.random() * totalAnimationDuration}s`;

        starField.appendChild(star);
    }

}

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


