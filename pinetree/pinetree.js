/*
  Create an `tree` function that accepts an integer
  as an argument. The function should create a pine
  tree out of asterisks in the browser console. The 
  height is whatever is passed as an argument to the 
  function.

  Example output with argument value of 5

            *
           ***
          *****
         *******
        *********

*/

// Create your function here. Make sure it takes the height argument.



// var tree = function(height) {
//   var spaces = [];
//   var stars = [];
//   var row = [];
//   for (var i = 0; i < height; i++) {
//     spaces[i] = " ";
//     spaces.push(" ");
//     stars.push("*");
//   };

// };

// console.log(tree(7));
// tree(7);


var row = [];
var space = [];

var tree = function(height) {
  var toPrint;
  row[0] = "*";
  for (var i = 1; i < height; i++) {
    row[i] = " ";
    space[i] = " ";
  }
  console.log(space.join("") + row.join(""));
  for (var i = 1; i < height; i++) {
    row.unshift("*");
    row.unshift("*");
    row.pop();
    toPrint = row.reverse().join("");
    console.log(toPrint);
    row.reverse();
  }
}

tree(5);