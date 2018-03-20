var str = process.argv[2];
var sum = 0;

`HELPER FUNCTIONS`
// a-z: 97 to 122, A-Z: 65-90
function isLetter(charCode) {
  if ( 97 <= charCode && charCode <= 122) {
    return true;
  }
  return false;
}

// 0 - 9: 48 to 57
function isDigit(charCode) {
  if ( 48 <= charCode && charCode <= 57) return true;
  return false;
}

var str = str.toLowerCase(); // change to lowercase
var noAns = false;

for (var i=0;i<str.length;i++) {
  var num = str.charCodeAt(i);
  // an alphabet
  if (isLetter(num)) {
    var code = num - 96;
    sum += code;
  }
  // an a digit
  else if (isDigit(num)) {
    var code = num - 48;
    sum += code;
  }
  // invalid input
  else {
    console.log("invalid input");
    noAns = true;
    break;
  }
}

if (! noAns) console.log(sum);
