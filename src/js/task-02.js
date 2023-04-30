const ingridients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const arrayOne = [];

ingridients.forEach((ingridient) => {
  const liIngridient = document.createElement("li");
  liIngridient.classList.add("item");
  liIngridient.textContent = ingridient;
  arrayOne.push(liIngridient);
  
});

document.querySelector(`#ingredients`).append(...arrayOne);
