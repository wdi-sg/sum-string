// console.log("hello");
// console.log( process.argv );
// var numString = parseInt( process.argv[2] );

//sum string from user input
var inputString = process.argv[2];

var breakUpString = inputString.split("");

var singleNumString = parseInt(breakUpString[1]);

var sum = 0;

for(let i=0; i<breakUpString.length; i++) {
	sum += parseInt(breakUpString[i],10);
}

console.log("The sum of your input is " + sum);

//sum string from user input - can accept negative integer
function sumDigits(num) {
  var count = 0;
  var intermediate = inputString.toString().match(/-?\d/g);
  for (var i = 0; i < intermediate.length; i++) {
    count += parseInt(intermediate[i])
  }
  return count;
}

var answerTwo = sumDigits(inputString);
console.log("As there are negative integers in your input, the sum of your input is " + answerTwo);