window.addEventListener("DOMContentLoaded", () => {
  // open and close burger menu
  document
    .querySelector("#navigation-control")
    .addEventListener("click", (event) => toggleNav(event));

  // nav to search page on search button click
  document.querySelector(".search-form").addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();
    window.location.href = "/recipes.html";
  });
});

const toggleNav = (event) => {
  const idToOpen = event.target.dataset.toOpen;
  document.querySelector("#" + idToOpen).classList.toggle("closed");
};
