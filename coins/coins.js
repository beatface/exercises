/* ...........YOUR MISSION...........

Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.

Input: 0.67 
Output: { quarters: 2, dimes: 1, nickels: 1, pennies: 2 }

*/



function coinCounter(dollarAmount) { // Initialize a JavaScript object to hold the coins var coinPurse = {};
	var coinPurse = {};
	var change = 0;
	coinPurse.quarters = parseInt(dollarAmount / .25);
	change = dollarAmount % .25;
	console.log("dollarchange", change);
	coinPurse.dimes = parseInt(change / .1);
	change = change % .1;
	console.log("dimechange", change);
	coinPurse.nickels = parseInt(change / .05);
	change = change % .05;
	console.log("nickelchange", change);
	coinPurse.pennies = parseInt(change / .01);
	return coinPurse; 
}

var coins = coinCounter(0.67);

console.log(coins);