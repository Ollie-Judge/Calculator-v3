const input = document.getElementById("calculationScreen");
const buttons = document.querySelectorAll("button");

function calculate(expression) {
  try {
    return new Function("return " + expression)();
  } catch (error) {
    return error;
  }
}

function operation(buttonValue) {
  if (buttonValue === "C") {
    input.value = "";
  } else if (buttonValue === "DEL") {
    input.value = input.value.slice(0, -1);
  } else if (buttonValue === "=") {
    input.value = calculate(input.value);
  } else {
    input.value += buttonValue;
  }
}

buttons.forEach((button) => {
  let buttonValue = button.innerText;
  button.addEventListener("click", function () {
    operation(buttonValue);
  });
});
