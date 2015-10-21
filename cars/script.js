/*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.
  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/

/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */

 function Make() {
  this.makeName = "Ford";
 }

/*
Create a function, Model, to hold the 
corresponding property and value
*/

function Model() {
  this.modelName = "Freestar";
}
// Define the prototype of a Model?
Model.prototype = new Make();

// Define a Car
var Van = function (color) {
  this.color = color;
}
// What is the prototype of a Car?
Van.prototype = new Model();

// Create the first car
var myVan = new Van("silver");
console.log("myVan", myVan);

// Create the second car
var yourVan = new Van("black");
console.log("yourVan", yourVan);

// Create the third car
var grossVan = new Van("brown");
console.log("grossVan", grossVan);


