let menuBtn = document.querySelector("#menu-mobile");
let firstBar = document.querySelector("#menu-mobile span:first-child");
let secondBar = document.querySelector("#menu-mobile span:nth-child(2)");
let thirdBar = document.querySelector("#menu-mobile span:last-child");
let navMobile = document.querySelector(".nav__mobile");

menuBtn.addEventListener("click", () => {
    if (firstBar.classList.contains("transition")) {
        firstBar.classList.remove("transition");
        secondBar.classList.remove("transition2");
        thirdBar.classList.remove("transition3");
        navMobile.classList.remove("appear");
    } else {
        firstBar.classList.add("transition");
        secondBar.classList.add("transition2");
        thirdBar.classList.add("transition3");
        navMobile.classList.add("appear");
    }
})