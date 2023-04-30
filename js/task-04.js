const counterValue = document.querySelector(`#value`);
const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');

let counter = 0

const firstEvent = () => {
 counter -=1;
 counterValue.textContent = counter;
};

const secondEvent = () => {
 counter +=1;
 counterValue.textContent = counter;
};

decrBtn.addEventListener("click", firstEvent);
incrBtn.addEventListener("click", secondEvent);