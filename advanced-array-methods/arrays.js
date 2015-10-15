var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

// Use the forEach method to add the name of each planet to a div element in your HTML

var el = document.getElementById("planets");

planets.forEach(function(planet) {
	el.innerHTML += "<p>" + planet + "</p>";
	return el;
});

// Use the map method to create a new array where the first letter of each planet is capitalized

var capitalizedPlanet = planets.map(function(planet) {
	var firstLetter = planet.split("")[0].toUpperCase();
	return firstLetter + planet.slice(1);
});
console.log(capitalizedPlanet);

// Use the filter method to create a new array that contains planets with the letter 'e'

var ePlanets = planets.filter(function(planet) {
	return planet.indexOf("e") >= 0;
});
console.log(ePlanets);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce(function(firstWord, secWord) {
	return firstWord + " " + secWord;
});
console.log(sentence);