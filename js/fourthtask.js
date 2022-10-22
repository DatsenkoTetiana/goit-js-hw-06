`use strict`
const button = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  span: document.querySelector("#value"),
};

let value = 0;
const increment = () => {
  value += 1;

 button.span.textContent = value;
};

const decrement = () => {
  value -= 1;

  button.span.textContent = value;
};

button.sub.addEventListener("click", increment);
button.add.addEventListener("click", decrement);

