for (let btn of document.querySelectorAll('button[data-id="increment"]')){
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        changeInputState(this);
        changeComponentAmount(this)
    })
}

function changeInputState(btn) {
    const action = btn.dataset.action;
    const parent = btn.parentElement;
    const field = parent.querySelector("input");
    const minValue = Number(field.getAttribute("min"));
    const maxValue = Number(field.getAttribute("max"));

    // Set new value
    if (action === "+") field.value++;
    else field.value--;

    // Enable buttons
    parent.querySelectorAll('button[data-id="increment"]').forEach((elm) => elm.removeAttribute("disabled"));
    // Disable btns if min or max reached
    if (field.value <= minValue) parent.querySelector("[data-action='-']").toggleAttribute("disabled");
    if (field.value >= maxValue) parent.querySelector("[data-action='+']").toggleAttribute("disabled");
}

function changeComponentAmount(btn){
    const action = btn.dataset.action;
    const container = document.querySelector('#recipe-components');
    const components = container.children;
    if (action === "+") {
        const template = document.querySelector('template[data-id="component"]').content;
        const clone = template.cloneNode(true)
        container.append(clone);
    } else {
        components.item(components.length - 1).remove();
    }
}

// Attach event listener to recipe components container
document.querySelector('#recipe-components').addEventListener('click', function(e){
    e.preventDefault();

    // Select button
    // defaults to null in case the target is either not a button or an element inside a button
    const button = e.target.closest('button')
    
    // do nothing if not a button
    if (!button) return;

    // in case its a remove/close button, remove its parent element
    if (button.dataset.action == "remove"){
        if (button.parentNode.closest('fieldset').children.length > 1){
            button.parentNode.remove();
        }
    }

    // in case its an add-ingredient button, clone template and append to fieldset
    if (button.dataset.action == "add-ingredient"){
        const template = document.querySelector('template[data-id="ingredient"]').content
        const clone = template.cloneNode(true)
        button.parentNode.querySelector('fieldset').append(clone)
    }

    // in case its an add-instruction button, clone template and append to fieldset
    if (button.dataset.action == "add-instruction"){
        const template = document.querySelector('template[data-id="instruction"]').content
        const clone = template.cloneNode(true)
        button.parentNode.querySelector('fieldset').append(clone)
    }
})