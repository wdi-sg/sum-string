//console.log((process.argv[2]).split(""));

var count = 0;
var lCount = 0;


if(process.argv[2]== "addNumbers"){
	var parameters = process.argv[3].split("");
	for(i=0; i < parameters.length ; i++ ){
		if(parameters[i] == "-"){
			i++;
			parameters[i] = parseInt(parameters[i])* -1; 
		}
		parameters[i] = parseInt(parameters[i]);
		count += parameters[i];
	}
}

else if(process.argv[2]== "addLetters") {
	var parameters = process.argv[3].split("");
	for(i=0; i < parameters.length ; i++ ){
		parameters[i] = parseInt(parameters[i],36) -9;
		lCount += parameters[i];
	}
}

else{
	var parameters = process.argv[2].split("");
	for(i=0; i < parameters.length ; i++ ){

		if(parameters[i] == "-"){
			i++;
			parameters[i] = parseInt(parameters[i])* -1; 
		}


		if( parseInt(parameters[i],36) < 10){
			count += parseInt(parameters[i],36);
		}
		else{
			lCount += parseInt(parameters[i],36) - 9;
		}
	}
}

console.log("All Numbers: " +count);
console.log("All Letters: " +lCount);