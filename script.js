//Get access to all of the buttons
let plusBtn = document.getElementById("plusBtn");
let minusBtn = document.getElementById("minusBtn");
let multiplyBtn = document.getElementById("multiplyBtn");
let divideBtn = document.getElementById("divideBtn");
let modBtn = document.getElementById("modBtn");

//get access to the input numbers
let number1 = document.getElementById("1");
let number2 = document.getElementById("2");

//Get access to the result label
let result = document.getElementById("result");

plusBtn.addEventListener("click", () => {
  result.textContent = Number(number1.value) + Number(number2.value);
});

minusBtn.addEventListener("click", () => {
  result.textContent = Number(number1.value) - Number(number2.value);
});

multiplyBtn.addEventListener("click", () => {
  result.textContent = Number(number1.value) * Number(number2.value);
});

divideBtn.addEventListener("click", () => {
  result.textContent = Number(number1.value) / Number(number2.value);
});

modBtn.addEventListener("click", () => {
  result.textContent = Number(number1.value) % Number(number2.value);
});
