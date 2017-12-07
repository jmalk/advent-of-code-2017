const fs = require('fs');

fs.readFile(__dirname + '/../inputs/day-02-input', 'utf8', (err, data) => {
  if (err) throw err;

  let rows = data.split('\n');

  rows.pop();

  let rowsOfNumbers = rows.map(function (row) {
    return row.split('\t');
  });

  console.log(rowsOfNumbers);
});
