const regulator = document.querySelector("input#font-size-control");
const textSize = document.querySelector("span#text");


regulator.addEventListener("input", (evt) => {
    textSize.style.fontSize = `${evt.target.value}px`;
});