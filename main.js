window.addEventListener("load", initEvent);
flag = false;

function initEvent() {
    window.addEventListener("scroll", hscroll);
    document.querySelector(".nav-hs").addEventListener("click", navbar);
    top = document.querySelector(".top-arrow").addEventListener("click", goToTop);
    window.addEventListener("scroll", rotateimg);

}
// function hscroll() {
//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//         document.querySelector(".header").className = "headerscroll";
//     } else {
//         document.querySelector(".headerscroll").className = "header";
//     }
// }
function rotateimg() {
    var position = window.scrollY;
    if (position > 430) {
        document.querySelector(".about-right").style.transform = "rotateY(180deg)";
        document.querySelector(".about-right").style.transitionDuration = "1s";
    }
}
function hscroll() {
    var ypos = window.pageYOffset;
    if (ypos > 50) {
        document.querySelector(".header").className = "headerscroll";
    }
    else {
        document.querySelector(".headerscroll").className = "header";
    }
}


function navbar() {
    if (flag == false) {
        document.querySelector(".nav-bar").style.visibility = "visible";
        document.querySelector(".nav-bar").style.height = "100%";
        document.querySelector(".fa-bars").style.visibility = "hidden";
        document.querySelector(".fa-times").style.visibility = "visible";
        flag = true;
    }
    else {
        document.querySelector(".nav-bar").style.visibility = "hidden";
        document.querySelector(".nav-bar").style.height = "0px";
        document.querySelector(".fa-bars").style.visibility = "visible";
        document.querySelector(".fa-times").style.visibility = "hidden";
        flag = false;
    }
}

// function goToTop() {
//     document.querySelector(".top-arrow").scrollTo(0, 0);
//     console.log("dcd");

// }

// document.querySelector(".r").addEventListener("click", gtp);
// function gtp() {
//     window.scrollTo(0, 0);
// }
