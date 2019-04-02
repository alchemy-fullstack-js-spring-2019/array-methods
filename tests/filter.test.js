const { filter } = require('../lib/filter');

describe('filter function', () => {
  it('creates new array from values that return true', () => {
    const odd = n => n % 2 !== 0;
    const actual = filter([1, 2, 3, 4, 5], odd);
    expect(actual).toEqual([1, 3, 5]);
  });
});
