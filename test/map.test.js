const {
  ourMap
} = require('../lib/map');

describe('map function', () => {
  it('take array return array with no changes', () => {
    const mock = jest.fn(n => n);
    expect(ourMap([1, 2, 3, 4], mock)).toEqual([1, 2, 3, 4]);
  });
});
