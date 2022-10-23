`use strict`;
const input = document.getElementById(`name-input`);
const nameOutput = document.getElementById(`name-output`);
input.oninput = function () {
  if (input.value === "") {
    nameOutput.innerHTML = "Anonymous";
  } else {
    nameOutput.innerHTML = input.value;
  }
};
document.getElementById(`name-input`).setAttribute("style", " height: 50px;");
