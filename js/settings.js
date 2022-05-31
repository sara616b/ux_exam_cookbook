window.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.querySelector("#save-changes");
  const inputContainers = document.querySelectorAll(".input-container");
  inputContainers.forEach((container) => {
    container.querySelector("input").addEventListener("change", (event) => {
      // changes in input -> save button is enabled
      if (!event.target.checkValidity()) {
        submitButton.setAttribute("disabled", true);
      }
      if (event.target.checkValidity()) {
        submitButton.removeAttribute("disabled");
      }
    });
  });
  submitButton.addEventListener("click", (event, submitButton) => {
    saveChanges(event, submitButton);
  });
  const closeModalButton = document.querySelectorAll(
    "[data-close-modal='true']"
  );
  closeModalButton.forEach((button) => {
    button.addEventListener("click", () => closeModal());
  });
  const deleteButtons = document.querySelectorAll(
    "[data-delete-account='true']"
  );
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => deleteClick());
  });
});

const saveChanges = (event, submitButton) => {
  event.preventDefault();
  event.stopPropagation();
  event.target.setAttribute("disabled", true);
  document.querySelector("#success-message").classList.remove("hidden");
  setTimeout(() => {
    document.querySelector("#success-message").classList.add("hidden");
  }, 1000);
};

const deleteClick = () => {
  document.querySelector("#delete-modal").classList.remove("hidden");
};

const closeModal = () => {
  document.querySelector("#delete-modal").classList.add("hidden");
};
