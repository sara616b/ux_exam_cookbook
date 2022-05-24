window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('button[data-toggle="collapse"').forEach(btn => {
        btn.addEventListener('click', toggleCollapse);
    })
    document.querySelectorAll('button[data-toggle="ingredient-filter"]').forEach(btn => {
        btn.addEventListener('click', addIngredientFilter);
    })
})

function toggleCollapse() {
    const elem = event.target;
    document.querySelector(elem.dataset.target).classList.toggle(elem.dataset.toggle);
}

function addIngredientFilter() {
    const elem = event.target;
    const input = document.querySelector(elem.dataset.input);
    
    if (input.value === "") {return false;}

    const valLowCase = input.value.toLowerCase();
    const valCapCase = input.value.substring(0,1).toUpperCase() + input.value.substring(1).toLowerCase();

    let ingredientDoesExist = false;
    document.querySelectorAll(`${elem.dataset.target} button`).forEach(btn => {
        if (btn.dataset.value === valLowCase) {
            ingredientDoesExist = true;
        }
    })
    if (ingredientDoesExist) {
        input.value = "";
        return false;
    }

    document.querySelectorAll(`${elem.dataset.counterTarget} button`).forEach(btn => {
        if (btn.dataset.value === valLowCase) {
            btn.remove();
        }
    })
    
    const dest = document.querySelector(elem.dataset.target);
    const temp = document.querySelector(elem.dataset.temp);
    const clone = temp.cloneNode(true).content;
    clone.querySelector('.value').textContent = valCapCase;
    clone.querySelector('button').setAttribute('data-value', valLowCase);
    clone.querySelector('button').addEventListener('click', removeIngredientFilter);
    dest.appendChild(clone);

    input.value = "";

    // TODO: Call function to apply filter changes
}

function removeIngredientFilter() {
    const elem = event.target;
    const value = elem.dataset.value;
    console.log(value);
    elem.remove();

    // TODO: Call function to apply filter changes
}
