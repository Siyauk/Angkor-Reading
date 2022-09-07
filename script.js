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

function myFunction5() {
    var dots = document.getElementById("dots5");
    var moreText = document.getElementById("more5");
    var btnText = document.getElementById("myBtn5");

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
function myFunction6() {
    var dots = document.getElementById("dots6");
    var moreText = document.getElementById("more6");
    var btnText = document.getElementById("myBtn6");

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
function myFunction7() {
    var dots = document.getElementById("dots7");
    var moreText = document.getElementById("more7");
    var btnText = document.getElementById("myBtn7");

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
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        360: {
            slidesPerView: 3,
        },
        375: {
            slidesPerView: 3,
        },
        428: {
            slidesPerView: 3,
        },
       
        800: {
            slidesPerView: 3,
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
        428: {
            slidesPerView: 3,
        },
        768: {
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
        428: {
            slidesPerView: 5,
        },
        768: {
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
        360: {
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 5,  
        },
        810:{
            slidesPerView: 5,
        },
        900:{slidesPerView: 5,
        },
        1280:{slidesPerView: 7,
        },
    },
});

var swiper = new Swiper(".arrivals-slider1", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: false,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    breakpoints: {
        360: {
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 5,  
        },
        810:{
            slidesPerView: 5,
        },
        900:{slidesPerView: 5,
        },
        1280:{slidesPerView: 7,
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
        768: {
            slidesPerView: 2,
        },
        1024: {
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
        768: {
            slidesPerView: 2,
        },
        1024: {
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
        428: {
            slidesPerView: 5,
        },
        768: {
            slidesPerView: 9,
        },
    },
});

function myFunction() {
    var input, filter, ul, li, a, i,h3;
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

var swiper = new Swiper(".details-a1", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: false,
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
    },
    breakpoints: {
        360: {
            slidesPerView: 3,
        },
        375: {
            slidesPerView: 3,
        },
        428: {
            slidesPerView: 3,
        },
        800: {
            slidesPerView: 3,
        },
        810:{
            slidesPerView: 5,
        },
        900:{slidesPerView: 5,
        },
        1280:{slidesPerView: 7,
        },
    },
});
/*search-list*/

  
var UL = document.getElementById("myUL");
// hilde the list by default
UL.style.display = "none";

var searchBox = document.getElementById("search-box");

// show the list when the input receive focus
searchBox.addEventListener("focus",  function(){
    // UL.style.display = "block";
});

// hide the list when the input receive focus
searchBox.addEventListener("blur", function(){
    UL.style.display = "none";
});


function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("search-box");
    ul = document.getElementById("myUL");
    filter = input.value.toUpperCase();
    // if the input is empty hide the list
    if(filter.trim().length < 1) {
        ul.style.display = "none";
        return false;
    } else {
        ul.style.display = "block";
    }
    
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        
        // This is when you want to find words that contain the search string
     if (a.innerHTML.toUpperCase().indexOf(filter) > -1) { 
        li[i].style.display = "";
     } else {
        li[i].style.display = "none";
    } 
    
    // This is when you want to find words that start the search string
    /*if (a.innerHTML.toUpperCase().startsWith(filter)) {
        li[i].style.display = "";
    } else {
        li[i].style.display = "none";
    }*/
    }
}