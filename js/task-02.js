const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const appendElements = ingredients.map((ingredient) => {
  const list = document.querySelector("#ingredients");

  const element = document.createElement("li"); 
  element.textContent = ingredient;
  element.classList.add('item');
  list.append(element);
});
console.log(appendElements);