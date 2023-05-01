const regulator = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

textSize.style.fontSize = regulator.value + "px";

regulator.addEventListener("input", (evt) => {
    textSize.style.fontSize = evt.currentTarget.value+`px`;
});