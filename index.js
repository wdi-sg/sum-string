const command = process.argv[2];
const input = process.argv[3].split('');

const charChecker = (elem) => {return (elem.charCodeAt(0) != 45 && (elem.charCodeAt(0) < 48 || elem.charCodeAt(0) > 57))};
const charReducer = (acc, elem) => acc + (elem.toLowerCase().charCodeAt(0) - 96);
let resultNum = 0, resultChar = 0;

switch (command) {
    case 'addNumbers':
        if (input.some(charChecker)) {
            console.log('Error: characters detected');
            return;
        }
        input.forEach((elem, index, arr) => {
            if (elem == '-') {
                arr[index+1] = -parseInt(arr[index+1]); // If there is no element there, it will remain as 0.
            } else if (parseInt(elem) >= -9 && parseInt(elem) <= 9) {
                resultNum += parseInt(elem);
            }
        })
        console.log('Result: ' + resultNum);
        break;
    case 'addLetters':
        console.log('Result: ' + input.reduce(charReducer, 0));
        break;
    default:
        console.log('Invalid input');
        break;
}