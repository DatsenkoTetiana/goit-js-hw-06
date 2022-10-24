`use strict`;

const inputVal = document.querySelector("#validation-input");

const addRemovePassword = (remove, add) => {
  inputVal.classList.remove(`${remove}`);
  inputVal.classList.add(`${add}`);
};

const validPassword = (e) => {
  if (Number(inputVal.dataset.length) === e.currentTarget.value.length) {
    addRemovePassword("invalid", "valid");
  } else {
    addRemovePassword("valid", "invalid");
  }
};

inputVal.addEventListener("blur", validPassword);
// коли класси присутні в css
// const inputVal = document.getElementById("validation-input");
// const totalLenght = inputVal.getAttribute("data-length");
// const intTotallenght = parseInt(totalLenght, 10);
// inputVal.addEventListener("blur", () => {
//   if (inputVal.value.length === intTotallenght) {
//     inputVal.classList.add("valid");
//     inputVal.classList.remove("invalid");
//   }
//   if (inputVal.value.length === 0) {
//     inputVal.classList.remove("valid");
//     inputVal.classList.remove("invalid");
//   }
//   if (inputVal.value.length !== intTotallenght && inputVal.value.length !== 0) {
//     inputVal.classList.add("invalid");
//   }
// });
// document
//   .getElementById("validation-input")
//   .setAttribute("style", " height: 50px;");

