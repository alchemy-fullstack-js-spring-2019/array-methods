const {
  ourMap
} = require('../lib/map');

describe('map function', () => {
  it('take array return array with no changes', () => {
    const mock = jest.fn(n => n);
    expect(ourMap([1, 2, 3, 4], mock)).toEqual([1, 2, 3, 4]);
  });
  it('deal with an array with holes', () => {
    const mock = jest.fn(n => n);
    expect(ourMap([1, 2,, 4], mock)).toEqual([1, 2,, 4]);
  });
  it('add map to our map', () => {
    const mock = jest.fn(n => n * 2);
    expect(ourMap([1, 2,, 4], mock)).toEqual([2, 4,, 8]);
  });
});
