

const inputField = document.querySelector(`#validation-input`);
const printedInput = (inputField.dataset.length);

inputField.addEventListener("blur", changeInputField); 

function changeInputField() {
if (inputField.value.length === Number(printedInput)) {
    inputField.classList.add("valid");
    inputField.classList.remove("invalid");    
} else {
    inputField.classList.remove("valid");
    inputField.classList.add("invalid");  }  

};