const { findIndex } = require('../lib/findIndex');

describe('find index', () => {
  it('finds array position of first match', () => {
    const odd = n => n % 2 !== 0;
    const actual = findIndex([4, 5, 6], odd);
    expect(actual).toEqual(1);
  });

  it('finds array position of first match', () => {
    const even = n => n % 2 === 0;
    const actual = findIndex([1, 3, 5, 6], even);
    expect(actual).toEqual(3);
  });
});
