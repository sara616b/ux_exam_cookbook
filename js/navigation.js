window.addEventListener("DOMContentLoaded", ()=> {
    document.querySelector("#navigation-control").addEventListener("click", (event)=>toggleNav(event));
    setPositionForSubNav();
});

window.addEventListener("resize", ()=> setPositionForSubNav())

const setPositionForSubNav = () => {
    const navText = document.querySelector(".has-sub-navigation");
    const subNav = document.querySelector("#sub-navigation");
    subNav.style.top = navText.offsetTop + (navText.offsetHeight /2) + "px";
    subNav.style.left = navText.offsetLeft + "px";
0}

const toggleNav = (event) => {
    const idToOpen = event.target.dataset.toOpen;
    document.querySelector("#" + idToOpen).classList.toggle("closed")
};
