window.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 10; i++) {
        const dest = document.querySelector(".main-grid");
        const temp = document.querySelector("#recipe");
        const clone = temp.cloneNode(true).content;
        clone.querySelector(".icon-primary").addEventListener("click", addToFavorites);
        if (i === 4 || i === 9) {
          const ad = document.createElement("article");
          ad.classList.add("advertisement")
          ad.innerHTML = "";
          dest.appendChild(ad);
        } else {
          dest.appendChild(clone)
        }  
    }
})

function addToFavorites() {
  const icon = event.target;
  
  icon.removeEventListener("click", addToFavorites);
  icon.addEventListener("click", removeFromFavorites);
  icon.classList.remove("icon-primary");
  icon.classList.add("icon-primary-inverted");

  document.querySelector(".modal").classList.add("show");
  document.querySelector(".modal").style.opacity = "1";
  document.querySelector("body").style.overflow = "hidden";
  
  setTimeout(() => {
    document.querySelector(".modal").style.opacity = "0";
    document.querySelector(".modal").addEventListener("transitionend", () => {
      document.querySelector(".modal").classList.remove("show");
      document.querySelector("body").style.overflow = "auto";
    })
  }, 1000)
}

function removeFromFavorites() {
  const icon = event.target;
  icon.removeEventListener("click", removeFromFavorites);
  icon.addEventListener("click", addToFavorites);
  icon.classList.remove("icon-primary-inverted");
  icon.classList.add("icon-primary");
}