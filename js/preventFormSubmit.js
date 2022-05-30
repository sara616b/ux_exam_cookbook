const allForms = document.querySelectorAll("form");
allForms.forEach((form) => {
  form.addEventListener("submit", (e) => e.preventDefault());
});
