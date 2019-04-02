const findIndex = require('../lib/find-index');

describe('findIndex function', () => {
  it('returns index of first Even item', () => {
    expect(findIndex([1, 2, 3, 4], n => n % 2 === 0)).toEqual(1);
  });
});
