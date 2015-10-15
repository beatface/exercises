/*
  ...........YOUR MISSION...........

  Write JavaScript functions that perform the following tasks.

  1. document.write() the characters of any string in reverse order.
  2. document.write() the characters of any string in alphabetical order.
  3. document.write() true, or false, if the passed string is a palidrome.

  Note: document.write() is a fast way to put content into the DOM 
  without the need for a getElementById() and innerHTML.
*/

function reversal(origString) {
	var reversedString = origString.split("").reverse().join("");
	document.write("<div>" + reversedString + "</div>");
	return reversedString;
}

function alphabits(origString) {
	var alphabetical = origString.split("").sort().join("");
	document.write("<div>" + alphabetical + "</div>");
	return alphabetical;
}

function palindrome(origString) {	
	var reversedString = reversal(origString);
	if (reversedString === origString) {
		document.write("<div>" + testString + " is a palindrome.");
	} else {
		document.write("<div>" + testString + " is not a palindrome.");
	}
}

var testString = "emma";
reversal(testString);
alphabits(testString);
palindrome(testString);