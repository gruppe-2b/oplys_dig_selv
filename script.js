var menuKnap = document.querySelector(".mobil_nav .closed .menu_icon");
var menuClose = document.querySelector(".mobil_nav .open .menu_icon");
var overlay = document.querySelector(".blur");
var menuOpen = document.querySelector(".open");

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("desktop_bread_crums").style.top = "";
    } else {
        document.getElementById("desktop_bread_crums").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}


//mobil_menu
menuKnap.addEventListener("click", openMenu);

function openMenu() {
    console.log("openMenu")
    menuKnap.removeEventListener("click", openMenu);
    overlay.classList.toggle("hide_blur");
    menuOpen.classList.toggle("hide");
    menuClose.addEventListener("click", closeMenu);
}

function closeMenu() {
    console.log("closeMenu")
    menuClose.removeEventListener("click", openMenu);
    overlay.classList.toggle("hide_blur");
    menuOpen.classList.toggle("hide");
    menuKnap.addEventListener("click", openMenu);
}
