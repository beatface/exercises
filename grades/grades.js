var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var scoreA = 0;
var scoreB = 0;
var scoreC = 0;
var scoreD = 0;
var scoreF = 0;
var lowestScore = 100;
var highestScore = 0;
var lastScore = scores[0];

for (var i = 0; i < scores.length; i++) {
	var score = scores[i];
	switch (score) {
		case 50:
		case 51:
		case 52:
		case 53:
		case 54:
		case 55:
		case 56:
		case 57:
		case 58:
		case 59:
		case 60:
			console.log("F");
			scoreF += 1;
			break;
		case 61:
		case 62:
		case 63:
		case 64:
		case 65:
		case 66:
		case 67:
		case 68:
		case 69:
		case 70:
			console.log("D");
			scoreD += 1;
			break;
		case 71:
		case 72:
		case 73:
		case 74:
		case 75:
		case 76:
		case 77:
		case 78:
		case 79:
		case 80:
			console.log("C");
			scoreC += 1;
			break;
		case 81:
		case 82:
		case 83:
		case 84:
		case 85:
		case 86:
		case 87:
		case 88:
		case 89:
		case 90:
			console.log("B");
			scoreB += 1;
			break;
		case 91:
		case 92:
		case 93:
		case 94:
		case 95:
		case 96:
		case 97:
		case 98:
		case 99:
		case 100:
			console.log("A");
			scoreA += 1;
			break;
	};
};

for (var i = 0; i < scores.length; i++) {
	var currentscore = scores[i];
	console.log(" ----- currentscore", currentscore);
	if (currentscore < lowestScore) {
		lowestScore = currentscore;
		console.log("lowestscore", lowestScore);
	} else if (currentscore > highestScore) {
		highestScore = currentscore;
		console.log("highestscore", highestScore);
	};
	lastScore = currentscore;
	console.log("lastscore", lastScore);
};


console.log("There are " + scoreA + " A's.");
console.log("There are " + scoreB + " B's.");
console.log("There are " + scoreC + " C's.");
console.log("There are " + scoreD + " D's.");
console.log("There are " + scoreF + " F's.");

console.log("The lowest grade is " + lowestScore + ".");
console.log("The highest grade is " + highestScore + ".");














