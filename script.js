const display = document.getElementById("display");

// Append value to display
function press(value) {
  display.value += value;
}

// Clear entire display
function clearDisplay() {
  display.value = "";
}

// Remove last digit
function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);  // No replace needed
  } catch (e) {
    display.value = "Error";
  }
}

