"use strict";
let inputOption = process.argv[2];
let inputStr = process.argv[3];

let total = 0;
let minus = false;
let inputVal = [];

if (inputOption === "addNumbers") {
    total = addNumbers(inputStr);
    console.log(total);
}
else if (inputOption === "addLetters") {
    total = addLetters(inputStr);
    console.log(total);
}
else if (inputOption === "addEverything") {
    total = addEverything(inputStr);
    console.log(total);
}
else {
    inputStr = process.argv[2];
    let totalArray = addThisAndThat(inputStr);
    console.log("Total Numbers: " + totalArray[0]);
    console.log("Total Letters: " + totalArray[1]);
}

function addThisAndThat(inputStr) {
    let totalNumbers = 0;
    let totalLetters = 0; 
    for (let i in inputStr) {
        let currentChar = inputStr[i];
        if (currentChar === "-") {
            minus = true;
        }
        else if (parseInt(currentChar)) {
            totalNumbers += addNumbers(currentChar);
        }
        else {
            totalLetters += addLetters(currentChar);
        }
    }
    return [totalNumbers, totalLetters];
}

function addEverything(inputStr) {
    let subTotal = 0;
    for (let i in inputStr) {
        let currentChar = inputStr[i];
        if (currentChar === "-") {
            minus = true;
        }
        else if (parseInt(currentChar)) {
            subTotal += addNumbers(currentChar);
        }
        else {
            subTotal += addLetters(currentChar);
        }
    }
    return subTotal;
}

function addNumbers(subStr) {
    let subTotal = 0;
    for (let i in subStr) {
        let charStr = subStr[i];
        if (charStr === "-") {
            minus = true;
            continue;
        }
        let charVal = parseInt(charStr);
        if (!charVal) {
            console.error("ERROR: wrong input.");
            return;
        }
        if (minus) {
            subTotal -= charVal; 
            minus = false;
        }
        else if (!minus) {
            subTotal += charVal;
        }
    }
    return subTotal;
}

function addLetters(subStr) {
    let subTotal = 0;
    for (let i in subStr) {
        let charStr = subStr[i];
        if (charStr === "-") {
            minus = true;
            continue;
        }
        let charVal = charStr.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        if (!charVal) {
            console.error("ERROR: wrong input.");
            return;
        }
        if (minus) {
            subTotal -= charVal; 
            minus = false;
        }
        else if (!minus) {
            subTotal += charVal;
        }
    }
    return subTotal;
}