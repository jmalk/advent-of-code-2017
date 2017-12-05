const dayOne = require('../code/day-01');

describe('Day 01 solution', () => {
  it('Sums all digits in the input for which the next digit is equal', () => {
    expect(dayOne([1, 1, 2, 2])).toEqual(3);
  });
});

