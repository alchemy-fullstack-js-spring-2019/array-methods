const { mapResult } = require('../lib/map');

describe('map function', () => {
  it('add one to every item in array', () => {

    expect(mapResult([1, 2, 3], n => n + 1)).toEqual([2, 3, 4]);
  });
  // it('add one to every item in array, skips holes', () => {

  //   expect(mapResult([1, 2, 3,, 5], n => n + 1)).toEqual([2, 3, 4,, 6]);
  // });
});
