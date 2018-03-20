# sum-string
Write a command line app that takes as input a string that only contains numbers. Your function should take each individual character in the string and sum them together e.g. '1234' returns '10'

Use `process.argv` to capture the input from the user.

Example command:
```
node index.js 123456
```

### Bonus
Allow the string to include negative values e.g. '12-23' returns '4'

### Bonus
Change the app to take another argument so that you can also take in a random string, and add that string's number value together.

The letters are assigned a number based on their order: a == 1, b == 2, c == 3, etc.

Example command:
```
node index.js addNumbers 123
```
outputs 6
```
node index.js addLetters abc
```
also outputs 6

### Bonus
Validate the user input to make sure there are no letters in the input.

### Bonus
Change the app to take in one string in any combination of numbers and letters and `console.log` 2 numbers, one for the total of all letters and one for numbers.
