const userMethod = process.argv[2];
const userInput = process.argv[3];
const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let sum = 0;
let addOrMinus = "add";


//q1
for (let i = 0; i < userInput.length; i++) {
  currentChar = userInput.charAt(i);
  sum += parseInt(currentChar);
}
console.dir(sum);


//q2
function addNumbers(userInput) {
  for (let i = 0; i < userInput.length; i++) {
    currentChar = userInput.charAt(i);
    if (addOrMinus == "add") {
      if (currentChar == "-") {
        addOrMinus = "minus";
      } else {
        sum += parseInt(currentChar);
      }
    } else {
      sum -= parseInt(currentChar);
      addOrMinus = "add";
    }
  }
}
console.dir(addNumbers(userInput));


//q3,4
function addNumOrLetters(userInput, userMethod){
  for (let i = 0; i < userInput.length; i++) {
    currentChar = userInput.charAt(i);
    if (userMethod == "addNumbers") {
      if (!isNaN(currentChar)) {
        sum += parseInt(currentChar);
      } else {
        return console.dir("Please enter all numbers");
      }
    } else {
      sum += parseInt(letters.indexOf(currentChar.toLowerCase())+1);
    }
  }
  return sum;
}
console.dir(addNumOrLetters(userInput, userMethod));

//q5
function addNumOrLetters(userInput){
  let numberSum = 0;
  let letterSum = 0;
  for (let i = 0; i < userInput.length; i++) {
    currentChar = userInput.charAt(i);
    if (!isNaN(currentChar)) {
        numberSum += parseInt(currentChar);
    } else {
      letterSum += parseInt(letters.indexOf(currentChar.toLowerCase())+1);
    }
  }
  return {"numberSum": numberSum, "letterSum": letterSum};
}
console.dir(addNumOrLetters(userInput, userMethod));