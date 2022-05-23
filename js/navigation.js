window.addEventListener("DOMContentLoaded", ()=> {
    document.querySelector("#navigation-control").addEventListener("click", (event)=>toggleNav(event));
});

const toggleNav = (event) => {
    const idToOpen = event.target.dataset.toOpen;
    document.querySelector("#" + idToOpen).classList.toggle("closed")
};
