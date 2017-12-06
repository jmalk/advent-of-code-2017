const dayOne = require('../code/day-01');

describe('Day 01 solution', () => {
  it('Sums all digits in the input for which the next digit is equal', () => {
    expect(dayOne([1, 1, 2, 2])).toEqual(3);
  });

  it('Treats the array as circular, so last digit will be added if it matches first', () => {
    expect(dayOne([1, 1, 1, 1])).toEqual(4);
  });

  it('Treats the array as circular, so last digit will be added if it matches first', () => {
    expect(dayOne([2, 1, 1, 2])).toEqual(3);
  });

  it('Does not add to the sum if there are zeroes', () => {
    expect(dayOne([0, 1, 1, 2, 0])).toEqual(1);
  });
});

