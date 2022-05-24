window.addEventListener("DOMContentLoaded", ()=> {
    const recipeControllers = document.querySelectorAll(".recipe-control");

    recipeControllers.forEach((button) => {
      button.addEventListener("click", ()=> {
        recipeControllers.forEach((button) => {
            button.classList.toggle("closed")
        })
      });  
    })
});
