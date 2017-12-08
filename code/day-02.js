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

module.exports = {
  partOne: partOne
};
