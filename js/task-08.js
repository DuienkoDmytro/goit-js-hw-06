const form = document.querySelector(`.login-form`);
form.addEventListener("submit", formSubmit);

function formSubmit (e) {
    e.preventDefault();

    const formElements = e.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;

console.log(e.currentTarget.elements)
    if (email === `` || password === ``) {
        alert("All fields should be filled");
    }
    else { 
        const correctInputData = {
            email,
            password
        };
       form.reset();
        console.log(correctInputData); 
        const correctInput = "All data were successfuly send";
       alert (correctInput);        
    }
    
    console.log(form.elements);
form.reset();
};
