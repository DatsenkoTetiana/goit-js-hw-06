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
list.setAttribute(
  "style",
  "list-style-type:none; text-align:center; margin:0 auto; background-color: yellow; width:300px;"
);
console.log(list);
