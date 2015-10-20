var firstInput = document.getElementById("num-input-1");
var secondInput = document.getElementById("num-input-2");
var addButton = document.getElementById("add");
var subtractButton = document.getElementById("subtract");
var multiplyButton = document.getElementById("multiply");
var divideButton = document.getElementById("divide");
var resultDiv = document.getElementById("result-container");


/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiplyNum(num1, num2) {
  return num1 * num2;
}


/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function addNum(num1, num2) {
  return num1 + num2;
  console.log(num1 + num2);
}


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtractNum(num1, num2) {
  return num1 - num2;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divideNum(num1, num2) {
  return num1 / num2;
}


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
function calculateNum(num1, num2, operation) {
  return operation(num1, num2);
}


/*** Event Listeners ***/
// addButton.addEventListener("click", calculateNum(firstInput.value, secondInput.value, addNum));
// subtractButton.addEventListener("click", );
// multiplyButton.addEventListener("click", );
// divideButton.addEventListener("click", );


document.querySelector("body").addEventListener("click", function(event) {
  console.log(event);
  var first = firstInput.value;
  var second = secondInput.value;
  var thisElement = event.target;
  if (thisElement.id === "add") {
    resultDiv.innerHTML = first;
    resultDiv.innerHTML += " + ";
    resultDiv.innerHTML += second;
    resultDiv.innerHTML += " = ";
    resultDiv.innerHTML += calculateNum(parseInt(first), parseInt(second), addNum);
    firstInput.value = "";
    secondInput.value = "";
  } else if (thisElement.id === "subtract") {
    resultDiv.innerHTML = first;
    resultDiv.innerHTML += " - ";
    resultDiv.innerHTML += second;
    resultDiv.innerHTML += " = ";
    resultDiv.innerHTML += calculateNum(parseInt(first), parseInt(second), subtractNum);
    firstInput.value = "";
    secondInput.value = "";
  } else if (thisElement.id === "multiply") {
    resultDiv.innerHTML = first;
    resultDiv.innerHTML += " x ";
    resultDiv.innerHTML += second;
    resultDiv.innerHTML += " = ";
    resultDiv.innerHTML += calculateNum(parseInt(first), parseInt(second), multiplyNum);
    firstInput.value = "";
    secondInput.value = "";
  } else if (thisElement.id === "divide") {
    resultDiv.innerHTML = first;
    resultDiv.innerHTML += " / ";
    resultDiv.innerHTML += second;
    resultDiv.innerHTML += " = ";
    resultDiv.innerHTML += calculateNum(parseInt(first), parseInt(second), divideNum);
    firstInput.value = "";
    secondInput.value = "";
  }
});















