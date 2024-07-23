let expression = "";

function setExpression(value) {
  // Handle percentage separately
  if (value === "%") {
    expression += "/100"; // Convert percentage to division by 100
  } else {
    expression += value;
  }
  document.getElementById("result").value = expression;
}

function clearAll() {
  expression = "";
  document.getElementById("result").value = expression;
}

function compute() {
  try {
    expression = eval(expression).toString();
  } catch (error) {
    expression = "Error";
  }
  document.getElementById("result").value = expression;
}
