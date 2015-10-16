/*
  ...........YOUR MISSION...........

  Write a program that will convert a temperature from
  fahrenheit to celsius, or from celsius to fahrenheit.

  1. In the HTML, have one input field where someone can enter
      in a temperature.
  2. Create a radio button group where Celsius or Fahrenheit 
      can be selected as the scale that the number should be 
      converted to.
  3. Create a block level element that will hold the text of the
      converted temperature.
  4. Create a button that, when clicked, displays the converted.
  5. Create another button that, when clicked, clears any text
      in the input field.
  6. Add an event handler to the input field that checks if the 
      user pressed the enter key, and if that happens, perform
      the conversion.
  7. If the temperature is greater than 90F/32C the color of 
      the converted temperature should be red.
  8. If the temperature is less than 32F/0C the color of 
      the converted temperature should be blue.
  9. For any other temperature, the color should be green.
*/


var outputElement = document.getElementById("container");
var inputTemp = document.getElementById("inputTemp");

function toCelsius(value) {
  var num = Number(value);
  var output = (num - 32) * 5/9;
  outputElement.innerHTML = output + " degrees Celsius";
}

function toFahrenheit (value) {
  var num = Number(value);
  var output = num * 9/5 + 32;
  outputElement.innerHTML = output + " degrees Fahrenheit";
}

// Get a reference to the button element in the DOM
var submitButton = document.getElementById("submit");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  if (document.getElementById("celsius").checked) {
    toCelsius(inputTemp.value);
  } else if (document.getElementById("fahrenheit").checked) {
    toFahrenheit(inputTemp.value);
  }
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
submitButton.addEventListener("click", determineConverter);

function clearForm (clickEvent) {
  document.getElementById("form").reset();
  outputElement.innerHTML = "";
}

var clearButton = document.getElementById("clear");

clearButton.addEventListener("click", clearForm);
