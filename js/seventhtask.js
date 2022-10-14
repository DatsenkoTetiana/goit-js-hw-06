`use strict`
const fontEl = document.getElementById(`text`);

const inputEl = document.getElementById(`font-size-control`);

inputEl.addEventListener(`input`, (e) => {
  const size = inputEl.value;
  fontEl.style.fontSize = size + "px";
});