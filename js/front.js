//carousel
init();
function init() {
  //    Carousel
  const carouselBtns = document.querySelectorAll(".carousel > button");
  carouselBtns.forEach((btn) => btn.addEventListener("click", moveCarousel));
  if (window.innerWidth > 700) window.addEventListener("resize", resetCarousel);
}

function resetCarousel() {
  document.querySelector(".carousel .overflow-container").scrollLeft = 0;
}

function moveCarousel(e) {
  const slider = document.querySelector(".carousel .slider");
  const action = e.target.dataset.action;

  //   Move carousel
  if (action === "forward") slider.classList.add("to-end");
  else slider.classList.remove("to-end");

  //   Enable btns
  document.querySelectorAll(".carousel > button").forEach((btn) => btn.removeAttribute("disabled"));
  //   Disable target btn
  e.target.setAttribute("disabled", "");
}
