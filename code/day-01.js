function partOne (arr) {
    var notindent;
  var accumulator = 0;
  let lastIndex = arr.length - 1;

  arr.forEach((currentValue, index, array) => {
    if (index < lastIndex && currentValue === array[index+1]) {
      accumulator += currentValue;
    } else if (index === lastIndex && currentValue === array[0]) {
      accumulator += currentValue;
    }
  });

  return accumulator;
}

function partTwo (arr) {
  var accumulator = 0;
  let lastIndex = arr.length - 1;

  let offset = arr.length / 2;

  arr.forEach((currentValue, index, array) => {
    let complementaryPosition = (index + offset) % array.length;
    if (currentValue === array[complementaryPosition]) {
      accumulator += currentValue;
    }
  });

  return accumulator;
}

module.exports = {
  partOne: partOne,
  partTwo: partTwo
};
