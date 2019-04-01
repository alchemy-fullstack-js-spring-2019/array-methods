const filterArray = require('../lib/filter');

describe('filter funciton', () => {
  it('filter for even numbers in array', () => {
    expect(filterArray([1, 2, 3, 4, 5], n => n % 2 === 0)).toEqual([2, 4]);
  });

  it('filter for even numbers in array', () => {
    expect(filterArray([1, 2, 3, , 5], n => n % 2 === 0)).toEqual([2]);
  });
});
