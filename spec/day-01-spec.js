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
    it('1212 produces 6: the list contains 4 items, and all four digits match the digit 2 items ahead.', () => {
      expect(dayOne.partTwo([1, 2, 1, 2])).toEqual(6);
    });

    it('1221 produces 0, because every comparison is between a 1 and a 2.', () => {
      expect(dayOne.partTwo([1, 2, 2, 1])).toEqual(0);
    });

    it('123425 produces 4, because both 2s match each other, but no other digit has a match.', () => {
      expect(dayOne.partTwo([1, 2, 3, 4, 2, 5])).toEqual(4);
    });

    it('123123 produces 12.', () => {
      expect(dayOne.partTwo([1, 2, 3, 1, 2, 3])).toEqual(12);
    });

    it('12131415 produces 4.', () => {
      expect(dayOne.partTwo([1, 2, 1, 3, 1, 4, 1, 5])).toEqual(4);
    });
  });
});

