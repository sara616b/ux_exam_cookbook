//carousel
init();
function init() {
  //    Carousel
  const carouselBtns = document.querySelectorAll(".carousel > button");
  carouselBtns.forEach((btn) => btn.addEventListener("click", moveCarousel));
  if (window.innerWidth > 700) window.addEventListener("resize", resetCarousel);

  //hero slider
  const heroSlideInterval = setInterval(() => {
    const container = document.querySelector(".hero-slider");
    const slider = document.querySelector(".hero-slider .slider");
    const current = slider.querySelector(".current");
    const dataNr = Number(current.dataset.nr);

    // Remove old .current's
    current.classList.remove("current");
    container.querySelector(".dot.current").classList.remove("current");

    // Set new .current's
    try {
      slider.querySelector(`[data-nr="${dataNr + 1}"]`).classList.add("current");
      container.querySelector(`.dot[data-nr="${dataNr + 1}"]`).classList.add("current");

      slider.style.setProperty("--slide-x", dataNr * -33.33 + "%");
    } catch {
      slider.querySelector(`[data-nr="1"]`).classList.add("current");
      container.querySelector(`.dot[data-nr="1"]`).classList.add("current");
      slider.style.setProperty("--slide-x", "0%");
    }
    console.log("test");
  }, 5000);
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
