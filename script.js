searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
}


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display == "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "View more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "View less";
        moreText.style.display = "inline";
    }
}

function myFunction1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");

    if (dots.style.display == "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "View more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "View less";
        moreText.style.display = "inline";
    }
}

function myFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");

    if (dots.style.display == "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "View more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "View less";
        moreText.style.display = "inline";
    }
}

function myFunction3() {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");

    if (dots.style.display == "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "View more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "View less";
        moreText.style.display = "inline";
    }
}

function myFunction4() {
    var dots = document.getElementById("dots4");
    var moreText = document.getElementById("more4");
    var btnText = document.getElementById("myBtn4");

    if (dots.style.display == "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "View more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "View less";
        moreText.style.display = "inline";
    }
}

var swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        360: {
            slidesPerView: 2,
            slidesPerView: 3,

        },
        1280: {
            slidesPerView: 4,
            slidesPerView: 5,
            slidesPerView: 6,
            slidesPerView: 7,
            slidesPerView: 8,
        },
    },
});

var swiper = new Swiper(".books-slider1", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        360: {
            slidesPerView: 2,
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 4,
            slidesPerView: 5,

        },
    },
});

var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        360: {
            slidesPerView: 2,
            slidesPerView: 3,
            slidesPerView: 4,
            slidesPerView: 5,
        },
        1280: {
            slidesPerView: 6,
            slidesPerView: 7,
            slidesPerView: 8,
            slidesPerView: 9,
        },

    },
});

var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 0,
        },
        360: {
            slidesPerView: 1,
            slidesPerView: 2,
            slidesPerView: 3,
            slidesPerView: 4,
            slidesPerView: 5,
        },
        1280: {
            slidesPerView: 5,
            slidesPerView: 6,
            slidesPerView: 7,
            slidesPerView: 8,
            slidesPerView: 9,
        },

    },
});
var swiper = new Swiper(".arrivals-slider1", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: false,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 0,
        },

        360: {
            slidesPerView: 1,
            slidesPerView: 2,
            slidesPerView: 3,
            slidesPerView: 4,
            slidesPerView: 5,
        },
        1280: {
            slidesPerView: 5,
            slidesPerView: 6,
            slidesPerView: 7,
            slidesPerView: 8,
            slidesPerView: 9,
        },
    },
});

var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        360: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        360: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".featured-slider-business ", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 0,
        },
        360: {
            slidesPerView: 1,
            slidesPerView: 2,
            slidesPerView: 3,
            slidesPerView: 4,
            slidesPerView: 5,
        },
        1280: {
            slidesPerView: 5,
            slidesPerView: 6,
            slidesPerView: 7,
            slidesPerView: 8,
            slidesPerView: 9,
        },
    },
});

function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("search-box");
    filter = input.value.toUpperCase();
    document.getElementById("content");
    h3.getElementsByTagName("");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}