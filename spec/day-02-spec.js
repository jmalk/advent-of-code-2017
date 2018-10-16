const dayTwo = require('../code/day-02');

describe('Day 02 solution', () => {
  describe('Part 1', () => {
    describe('Given a spreadsheet', () => {
      let spreadsheet = [
        [5, 1, 9, 5],
        [7, 5, 3],
        [2, 4, 6, 8]
      ];

      it('Returns the sum of the ranges of the rows', () => {
        expect(dayTwo.partOne(spreadsheet)).toEqual(18);
      });
    });
  });

  describe('Part 2', () => {
    describe('Given a spreadsheet', () => {
      let spreadsheet = [
        [5, 9, 2, 8],
        [9, 4, 7, 3],
        [3, 8, 6, 5]
      ];

      it('Returns the sum of the results of dividing the only two numbers in each row that divide with no remainder', () => {
        expect(dayTwo.partTwo(spreadsheet)).toEqual(9);
      });
    });
  });
});

