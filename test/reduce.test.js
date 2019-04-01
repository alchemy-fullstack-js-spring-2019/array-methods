const reduceArray = require('../lib/reduce');

describe('reduce function', () => {
  it('adds all numbers in array', () => {
    expect(reduceArray([1, 2, 3, 4], (sum, item) => sum + item)).toEqual(10);
  });
});
