function partOne (rows) {
  let checksum = 0;

  let rangeOfEachRow = rows.map((row) => {
    return row.reduce((a, b) => {
      return Math.max(a, b);
    }) - row.reduce((a, b) => {
      return Math.min(a, b);
    });
  });

  checksum = rangeOfEachRow.reduce((a, b) => { return a + b; });

  return checksum;
}

function partTwo (rows) {
  let descendingRows = rows.map((row) => {
    return row.sort((a, b) => {
      return b - a;
    });
  });

  // For each row
  // Create a list of all pairs of numbers (maybe where first number >= second number)
  // For each pair of numbers
  // If first number modulo second number === 0
  // Return early with first number divided by second number

  console.log(descendingRows);

}

module.exports = {
  partOne: partOne,
  partTwo: partTwo
};
