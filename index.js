const addNumbers = () => {
	if(typeof(process.argv[3]) === "string"){
		const string = process.argv[3];
		let results = 0;
		let pos = -1;
		//if the character at string returns a "-", record the index of it
		for(let i =0; i<string.length;i++){
			if(string.charAt(i) === "-"){
				pos = i;
			}
			if(parseInt(string.charAt(i),36)>= 10){
				return console.log("Your string contain letters!")
			}
		}
		console.log("position of \"-\" is at " + pos);

		for(let i=0; i<string.length; i++){
			if(string.charAt(i) == string.charAt(pos) && pos != -1){
				i++;
			 	results -= parseInt(string.charAt(i));
			}
			 else{
				results += parseInt(string.charAt(i));
			}
		}
		return console.log("Results: " + results);
	}
	else{
		return console.log("Please input a string instead");
	}
}

const addLetters = () => {
	if(typeof(process.argv[3]) === "string"){
		const string = process.argv[3];
		let results = 0;
		for(let i =0; i<string.length;i++){
			if(parseInt(string.charAt(i),36) <= 9){
				return console.log("Your string contain numbers!")
			}
			if(parseInt(string.charAt(i),36) >= 10){
				results += (parseInt(string.charAt(i),36) - 9);
			}
		}
		return console.log("Results: " + results);
	}
	else{
		return console.log("Please input a string instead");
	}
}

const addEverything = () => {
	const string = process.argv[3];
	let numberString = "";
	let letterString = "";

	for(let i =0; i<string.length;i++){
		//if the character at string returns a "-"
		if(string.charAt(i) === "-"){
			//add it if the next string is a number
			if(parseInt(string.charAt(i+1),36) <= 9){
				numberString += string.charAt(i);
			}
		}
		if(parseInt(string.charAt(i),36) <= 9){
			numberString += string.charAt(i);
		}
		if(parseInt(string.charAt(i),36) >= 10){
			letterString += string.charAt(i);
		}
	}

	addNumbers()
}

if(process.argv[2] === "addNumbers"){
	addNumbers();
}
else if(process.argv[2] === "addLetters"){
	addLetters();
}
else{
	console.log("arguments avaliable: addNumbers,addLetters,addEverything");
}