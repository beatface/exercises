// Challenge 1
console.log("Challenge 1");

for (var i = 1; i > 0; i++) {
	if (i % 1 === 0
		&& i % 2 === 0
		&& i % 3 === 0
		&& i % 4 === 0
		&& i % 5 === 0
		&& i % 6 === 0
		&& i % 7 === 0
		&& i % 8 === 0
		&& i % 9 === 0
		&& i % 10 === 0) {
		console.log("no remainder", i)
		break;
	}
};

// Challenge 2
console.log("Challenge 2");

var firstNum = 0;
var secondNum = 1;
var newNum;

for (var i = 3; i <= 500; i++) {
	newNum = firstNum + secondNum;
	firstNum = secondNum;
	secondNum = newNum;
	if (newNum >= 500) {
		break;
	}
	console.log(newNum);
};

// Challenge 3
console.log("Challenge 3");

var sumOfSquares = 0;
for (var i = 1; i <= 10; i++) {
	var num = i * i;
	sumOfSquares += num;
}
console.log("sum of squares of numbers", sumOfSquares);

var sumOfNums = 0;
for (var i = 0; i <= 10; i++) {
	sumOfNums += i;
}
console.log("sum of natural numbers", sumOfNums);

var difference = sumOfSquares - sumOfNums;
console.log("The difference between the sum of the squares of the first ten natural numbers and the square of the sum of the first ten natural numbers is " + difference);








