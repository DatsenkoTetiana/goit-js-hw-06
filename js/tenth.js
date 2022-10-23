`use strict`;

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const inputNum = document.querySelector("#controls>input");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  let boxAdd = createBoxes(inputNum.value);
  boxes.append(...boxAdd);
});
destroyBtn.addEventListener("click", () => {
  destroyBoxes.call();
});
function createBoxes(amount) {
  const elementsToAdd = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    elementsToAdd.push(div);
  }
  return elementsToAdd;
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
