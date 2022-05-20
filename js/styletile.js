window.addEventListener("DOMContentLoaded", ()=> {

    // add colors to color section
    const colorValues = [
        {
            name: "light",
            hex: "#fff",
        },
        {
            name: "medium",
            hex: "#777",
        },
        {
            name: "dark",
            hex: "#000",
        },
        {
            name: "bg",
            hex: "#fefdfa",
        },
        {
            name: "primary",
            hex: "#f3654a",
        },
        {
            name: "primary_light",
            hex: "#ff8066",
        },
        {
            name: "secondary_light",
            hex: "#ccdb4a",
        },
        {
            name: "secondary_medium",
            hex: "#bbcb34",
        },
        {
            name: "secondary_dark",
            hex: "#5e724f",
        },
    ]
    colorValues.forEach(colorObj => {
        
        // clone template
        const colorTemplate = document.querySelector("#color-template").cloneNode(true).content;

        // add info to template
        colorTemplate.querySelector("div").style.backgroundColor = colorObj.hex;
        colorTemplate.querySelector(".name").textContent = colorObj.name;
        colorTemplate.querySelector(".hex").textContent = colorObj.hex;

        // add to color section
        document.querySelector("#colors").appendChild(colorTemplate);
    }) 

})