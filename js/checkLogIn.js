////////////////////
// To use:
// 1) add log in status to a data set on the body:
//       data-logged-in="false"
//
// 2) on anything that changes visibility with logged in status add:
//       data-show-logged-in="false"
//       or
//       data-show-logged-in="true"
////////////////////

window.addEventListener("DOMContentLoaded", ()=> {
    setLayoutBasedOnLogInStatus();

    document.querySelector("#login").addEventListener("click", ()=>toggleLogInStatus())
    document.querySelector("#profile-icon").addEventListener("click", ()=>toggleLogInStatus())
});

const setLayoutBasedOnLogInStatus = () => {
    const isLoggedIn = document.body.dataset.loggedIn;
    console.log(isLoggedIn);
    const toShow = document.querySelectorAll("[data-show-logged-in='true']");
    console.log(toShow)
    const toHide = document.querySelectorAll("[data-show-logged-in='false']");
    console.log(toHide)

    toShow.forEach((element) => {
        if (isLoggedIn == 'true') {
            element.classList.remove('hidden')
        } else {
            element.classList.add('hidden')
        }
    })
    toHide.forEach((element) => {
        if (isLoggedIn == 'false') {
            element.classList.remove('hidden')
        } else {
            element.classList.add('hidden')
        }
    })
}

const toggleLogInStatus = () => {
    document.body.dataset.loggedIn = document.body.dataset.loggedIn == 'true' ? 'false' : 'true';
    setLayoutBasedOnLogInStatus();
}