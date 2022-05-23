// Textareas counter
const textAreas = document.querySelectorAll("textarea");
textAreas.forEach((field) => {
  field.addEventListener("input", countTextAreaInput);
  field.addEventListener("change", countTextAreaInput);
});

function countTextAreaInput(e) {
  const field = e.target;
  const count = field.value.length;
  const counter = field.parentElement.querySelector(".counter span");
  counter.textContent = count;
}

const amountBtns = document.querySelectorAll(".amount-btn");
amountBtns.forEach((btn) => btn.addEventListener("click", calcAmount));

function calcAmount(e) {
  e.preventDefault();
  const btn = e.target;
  const action = btn.dataset.action;
  const parent = btn.parentElement;
  const field = parent.querySelector("input");
  const minValue = Number(field.getAttribute("min"));
  const maxValue = Number(field.getAttribute("max"));

  // Set new value
  if (action === "+") {
    field.value++;
  } else {
    field.value--;
  }

  // Enable buttons
  parent.querySelectorAll(".amount-btn").forEach((elm) => elm.removeAttribute("disabled"));
  // Disable btns if min or max reached
  if (field.value <= minValue) parent.querySelector("[data-action='-']").setAttribute("disabled", true);
  if (field.value >= maxValue) parent.querySelector("[data-action='+']").setAttribute("disabled", true);
}
