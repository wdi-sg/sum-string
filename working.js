if (process.argv.length === 4) {
  let input = process.argv[3];
  let totalSum = 0;
  if (process.argv[2] === "addNumbers") {
    if (input.match(/[a-z]/i)) {
      console.log(`error - alphabets found in input!`);
    } else {
      for (i=0; i<input.length; i++) {
        console.log(input[i]);
        if (input[i] === "-") {
          i++;
          totalSum += -parseInt(input[i]);
        } else {
          totalSum += parseInt(input[i]);
        }
      }
    }

  } else if (process.argv[2] === "addLetters") {
    for (i=0; i<input.length; i++) {
      let char = input.toLowerCase().charCodeAt(i) - 96;
      // console.log(char);
      totalSum += char;
    }
  }
  console.log("total sum:", totalSum);
} else if (process.argv.length === 3) {
  // mix inputs
  let input = process.argv[2];
  let numberSum = 0;
  let letterSum = 0;
  for (i=0; i<input.length; i++) {

    // check for negative sign
    let isNegative = false;
    if (input[i] === "-"){
      isNegative = true;
      i++;
    }
    if (isNaN(parseInt(input[i]))) {
      // letters
      charCode = input[i].toLowerCase().charCodeAt(0) - 96;
      if (charCode >= 1 && charCode <= 26) {
        letterSum += charCode;
      }
    } else {
      // numbers
      numberSum += isNegative ? -parseInt(input[i]) : parseInt(input[i]);
    }
  }
  console.log(`numberSum:`, numberSum);
  console.log("letterSum:", letterSum);
}
