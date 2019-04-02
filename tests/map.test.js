const { map } = require('../lib/map');

describe('map function', () => {
  it('makes new array from input array and callback', () => {
    const trip = n => n * 3;
    const actual = map([3, 4, 5], trip);
    expect(actual).toEqual([9, 12, 15]);
  });
});
