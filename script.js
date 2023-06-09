function updateInput(value, event) {
  event.preventDefault();
  document.getElementById("textIn").value += value;
}

function calculate(event) {
  event.preventDefault();
  const input = document.getElementById("textIn").value;
  const result = eval(input);
  console.log(result);
  document.getElementById("textIn").value = result;
}

function clearInput(event) {
  event.preventDefault();
  document.getElementById("textIn").value = "";
}

function deleteLastChar(event) {
  event.preventDefault();
  const input = document.getElementById("textIn").value;
  document.getElementById("textIn").value = input.slice(0, -1);
}
