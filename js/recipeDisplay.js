window.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#delete-recipe-button")
    .addEventListener("click", () => deleteClick());
  document.querySelector("");
});

const deleteClick = () => {
  document.querySelector("#delete-modal").classList.remove("hidden");
};

const closeModal = () => {
  document.querySelector("#delete-modal").classList.add("hidden");
};
