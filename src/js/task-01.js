const amount= document.querySelectorAll(`.item`);
console.log(`Number of categories: ${amount.length}`);

amount.forEach(elem => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
      console.log(`Elements: ${elem.lastElementChild.querySelectorAll(`li`).length}`);
})