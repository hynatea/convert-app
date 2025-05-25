// Section ONLINE BOOST

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
  let goldValue = [euros * (1000 / 30)] * 1000;
  output2.value = goldValue.toFixed(0);
}

// Add event listener to input field to call convert on input change
input.addEventListener("input", convert);

console.log("Conversion script loaded");

// Section IN GAME BOOST

let inputIg = document.getElementById("input-ig");
let outputIg = document.getElementById("output-ig");

inputIg.addEventListener("input", function () {
  let inputValue = parseFloat(inputIg.value);
  if (isNaN(inputValue)) {
    outputIg.value = "";
    return;
  }
  let convertedValue = inputValue * 0.525;
  outputIg.value = convertedValue.toFixed(0); // format to 2 decimal places
});
