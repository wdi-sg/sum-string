
// console.log(process.argv);


var number = process.argv[3];
// console.log(number);

var numberArray = [];
var sNumber = number.toString();
var answer = 0;

// console.log(sNumber.length);

if(process.argv[2] === "addNumbers"){
	for (var i = 0, len = sNumber.length; i < len; i++) {
		numberArray.push(sNumber.charAt(i));
	}
	for (var a = 0, len2 = numberArray.length; a < len2; a++){
		if(numberArray[a]=== '-'){
			numberArray[a+1] = -Math.abs(numberArray[a+1])
		}
		
	}
	for (var a = 0, len2 = numberArray.length; a < len2; a++){

		numberArray[a] = Number(numberArray[a]);
	}
	for (var a = 0, len2 = numberArray.length; a < len2; a++) {
		if(typeof numberArray[a] === "number" && isNaN(numberArray[a]) === false ){
			answer = answer + numberArray[a];
		}
	}
	console.log(answer);
}

// if(process.argv[2] === "addLetters"){

// }





