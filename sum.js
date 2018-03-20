var count = 0;
var lCount = 0;

var countNumbers = parameters => {
	var count = 0;
	var lCount = 0;
	var countArray = [];

	for(i=0; i < parameters.length ; i++ ){


		if(parameters[i] !== "-"){
			parameters[i] = parseInt(parameters[i],36)
		}
		else
		{
			//check for additional negative signs. if more than 1 negative signs, it will just make it positive or negative accordingly
			var negativeCounter = 0;
			for (j=i; j< parameters.length;j++ ){
				if(parameters[j] == "-" && parameters[j+1] !== "-"){
					break;
				}
				else{
					negativeCounter++;
				}
			}


			i = j+1;
			parameters[i] = parseInt(parameters[i],36);

			parameters[i] = ( negativeCounter % 2 == 0 ? parameters[i]*-1 : parameters[i]); 
		}

		if( parameters[i] < 10 && parameters[i] > -10){
			count += parameters[i];
		}
		else if(parameters[i]>9){
			lCount += parameters[i]-9;
		}
		else{
			lCount += parameters[i]+9;
		}

	}
	countArray.push(count);
	countArray.push(lCount);

	return countArray;
}


if(process.argv[2]== "addNumbers"){
	var parameters = process.argv[3].split("");
	count =	countNumbers(parameters)[0];
}
else if(process.argv[2]== "addLetters") {
	var parameters = process.argv[3].split("");
	lCount =	countNumbers(parameters)[1];
}

else{
	var parameters = process.argv[2].split("");
	var countArr =	countNumbers(parameters);
	count =	countArr[0];
	lCount = countArr[1];
}


console.log("All Numbers: " +count);
console.log("All Letters: " +lCount);