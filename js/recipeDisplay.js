window.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#delete-recipe-button")
    .addEventListener("click", () => deleteClick());

  const closeModalButton = document.querySelectorAll(
    "[data-close-modal='true']"
  );
  closeModalButton.forEach((button) => {
    button.addEventListener("click", () => closeModal());
  });
});

const deleteClick = () => {
  document.querySelector("#delete-modal").classList.remove("hidden");
};

const closeModal = () => {
  document.querySelector("#delete-modal").classList.add("hidden");
};
