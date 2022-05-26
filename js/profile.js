window.addEventListener("DOMContentLoaded", ()=> {
    const recipeControllers = document.querySelectorAll(".recipe-control");

    recipeControllers.forEach((button) => {
      button.addEventListener("click", ()=> {
        recipeControllers.forEach((button) => {
            button.classList.toggle("closed")
        })
      });  
    })
    
    for (let i = 0; i < 6; i++) {
        const dest = document.querySelector("#recipes-holder");
        const temp = document.querySelector("#recipe");
        const clone = temp.cloneNode(true).content;
        dest.appendChild(clone);
    }

    // edit / save edit profile
    document.querySelector("#edit-profile").addEventListener("click", (event)=> startEditing(event));
});

const startEditing = (event) => {
  // Change to correct text on button by 'saved' class and toggle class
  if (event.target.classList.contains("saved")) {
    event.target.textContent = "Save";
  } else {
    event.target.textContent = "Edit profile";
  };
  event.target.classList.toggle("saved");

  // find input containers and loop over
  const inputContainers = document.querySelectorAll(".input-container");
  inputContainers.forEach((inputContainer) => {
    // with the class 'not-input' the inputs looks like text
    inputContainer.classList.toggle("not-input");

    // find input or textarea
    let inputField = inputContainer.querySelector("input");
    if (inputField == null) {
      inputField = inputContainer.querySelector("textarea");
      if (inputField == null) {
        return
      }
    }

    // enable input
    inputField.toggleAttribute("disabled")
  })
}
