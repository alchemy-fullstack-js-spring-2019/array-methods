const reduceArray = require('../lib/reduce');

describe('reduce function', () => {
  it('adds all numbers in array', () => {
    expect(reduceArray([1, 2, 3, 4], (sum, item) => sum + item, 0)).toEqual(10);
  });

  it('subtracts all numbers in array', () => {
    expect(reduceArray([1, 2, 3, 4], (sum, item) => sum - item, 0)).toEqual(-10);
  });

  it('subtracts all numbers in array without innit', () => {
    expect(reduceArray([1, 2, 3, 4], (sum, item) => sum - item)).toEqual(-8);
  });

  it('multiply all numbers in array', () => {
    expect(reduceArray([1, 2, 3, 4], (multiplier, item) => multiplier * item, 1)).toEqual(24);
  });

  it('multiply all numbers in array', () => {
    expect(reduceArray([1, 2, 3, 4], (multiplier, item) => multiplier * item)).toEqual(24);
  });
});
