const dayOne = require('./day-01');
const fs = require('fs');

fs.readFile(__dirname + '/../inputs/day-01-input', 'utf8', (err, data) => {
  if (err) throw err;

  let dataAsArray = data.split('');

  let digitsRegEx = /[0123456789]/;
  let digitsOnly = dataAsArray.filter(function (string) {
    return digitsRegEx.test(string);
  });

  let numbers = digitsOnly.map(function (element) {
    return Number(element);
  });

  let result = dayOne.partOne(numbers);
  console.log(`Part 1: ${result}`);
});
