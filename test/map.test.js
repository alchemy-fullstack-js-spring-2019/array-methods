const {
  map
} = require('../lib/map');

describe('map function', () => {
  it('take array return array with no changes', () => {
    expect(arr([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
});
