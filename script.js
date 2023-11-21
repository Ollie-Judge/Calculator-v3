// let num1 = document.getElementById("num1").value;
// let num2 = document.getElementById("num2");
let equals = document.getElementById("equals");

let buttons = document.querySelectorAll("button");

let operator;

let result;

// const doTheMath = equals.addEventListener("click", function () {
//   console.log(Number(num1), num2);
// });

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    console.log(`buttonclicked${button.value}`);
  });
});

const add = (num1, num2) => {
  result = num1 + num2;
};

const subtract = (num1, num2) => {
  result = num1 - num2;
};

const multiply = (num1, num2) => {
  result = num1 * num2;
};

const divide = (num1, num2) => {
  result = num1 / num2;
};
