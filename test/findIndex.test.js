const {
  findIndex
} = require('../lib/findIndex');

describe('findIndex', () => {
  it('looks for a given number and returns its index, if found', () => {
    const arr = [1, 3, 6, 9];
    const indexAt = findIndex(arr, ele => {
      return ele === 3;
    });
    expect(indexAt).toEqual(1);
  });
});
