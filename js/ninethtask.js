`use strict`;
const button = document.querySelector(".change-color");
const color = document.querySelector(".color");
button.addEventListener("click", () => {
  let hexColor = getRandomHexColor();
  button.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
