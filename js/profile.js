window.addEventListener("DOMContentLoaded", ()=> {
    const recipeControllers = document.querySelectorAll(".recipe-control");

    // toggle between own and saved recipes
    recipeControllers.forEach((button) => {
      button.addEventListener("click", ()=> {
        recipeControllers.forEach((button) => {
            button.classList.toggle("closed")
        })
      });  
    })
    
    // add recipes
    for (let i = 0; i < 8; i++) {
        const dest = document.querySelector("#recipes-holder");
        const temp = document.querySelector("#recipe");
        const clone = temp.cloneNode(true).content;
        dest.appendChild(clone);
    }

    // edit / save edit profile
    document.querySelector("#edit-profile").addEventListener("click", (event)=> startEditing(event));
    // adding preferences
    document.querySelector("#add-preference").addEventListener("click", () => addPreference());
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
  const inputContainers = document.querySelectorAll(".input-container.profile");
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
  // show add / remove preferences
  const toShowEditing = document.querySelectorAll("[data-show-editing='true']");
  toShowEditing.forEach(element => {
    element.classList.toggle("hidden")
  });
  const deletePreference = document.querySelectorAll("[data-delete='true']");
  if (deletePreference) {
    deletePreference.forEach(button => {
      button.toggleAttribute("disabled");
      button.addEventListener('click', (event) => deleteThisPreference(event))
    })
  }
  document.querySelector("#preference-input").toggleAttribute("disabled");
}

const addPreference = () => {
  // clone template
  const template = document.querySelector("#preference-template").cloneNode(true).content;

  // add info to template
  if (document.querySelector("#preference-input").value == "") {
    return;
  }
  template.querySelector(".value").textContent = document.querySelector("#preference-input").value;
  template.querySelector("button").addEventListener('click', (event) => deleteThisPreference(event));

  // add to color section
  document.querySelector("#preferences-container").appendChild(template);
}

const deleteThisPreference = (event) => {
  event.target.remove();
}
