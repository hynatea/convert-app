let input = document.getElementById("input");
let output = document.getElementById("output");

function convert() {
  let inputValue = parseFloat(input.value);
  if (isNaN(inputValue)) {
    output.value = "";
    return;
  }
  let convertedValue = inputValue * 0.84;
  output.value = convertedValue.toFixed(2); // format to 2 decimal places
}

// Add event listener to input field to call convert on input change
input.addEventListener("input", convert);

console.log("Conversion script loaded");

let output2 = document.getElementById("output-2");

function convert() {
  let inputValue = parseFloat(input.value);
  if (isNaN(inputValue)) {
    output.value = "";
    output2.value = "";
    return;
  }
  let convertedValue = inputValue * 0.84;
  output.value = convertedValue.toFixed(2); // format to 2 decimal places
  convertToGold(convertedValue);
}

function convertToGold(euros) {
  let goldValue = euros * (1000 / 30);
  output2.value = goldValue.toFixed(2);
}

// Add event listener to input field to call convert on input change
input.addEventListener("input", convert);

console.log("Conversion script loaded");
