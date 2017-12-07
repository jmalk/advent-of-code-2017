const dayOne = require('../code/day-01');

describe('Day 01 solution', () => {
  describe('Part 1', () => {
    it('Sums all digits in the input for which the next digit is equal', () => {
      expect(dayOne.partOne([1, 1, 2, 2])).toEqual(3);
    });

    it('Treats the array as circular, so last digit will be added if it matches first', () => {
      expect(dayOne.partOne([1, 1, 1, 1])).toEqual(4);
    });

    it('Treats the array as circular, so last digit will be added if it matches first', () => {
      expect(dayOne.partOne([2, 1, 1, 2])).toEqual(3);
    });

    it('Does not add to the sum if there are zeroes', () => {
      expect(dayOne.partOne([0, 1, 1, 2, 0])).toEqual(1);
    });
  });

  describe('Part 2', () => {
    it('Sums all digits in the input for which the digit half the length of the array away is equal', () => {
      expect(dayOne.partTwo([1, 2, 1, 2])).toEqual(3);
    });
  });
});

