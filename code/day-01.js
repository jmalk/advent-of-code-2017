module.exports = function (arr) {
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
