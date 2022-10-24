`use strict`;
// second task
const fr = new DocumentFragment();
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
for (let ingredient of ingredients) {
  let item = document.createElement(`li`);
  item.innerHTML = ingredient;
  fr.append(item);
  item.classList.add(`item`);
}
let list = document.querySelector(`#ingredients`);
list.append(fr);

console.log(list);
