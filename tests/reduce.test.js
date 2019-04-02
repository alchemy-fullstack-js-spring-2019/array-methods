const { reduce } = require('../lib/reduce');


describe('reduce tests', () => {
  it('reduce array to the sum', () => {
    let int = 0;
    const mock = jest.fn((acc, n) => acc + n);
    const array = [1, 2, 3];
    const actual = reduce(array, mock, int);
    expect(actual).toEqual(6);
  });

  it('reduce array to the sum', () => {
    let initialValue = null;
    const mock = jest.fn((acc, n) => acc + n);
    const array = [5, 5, 5];
    const actual = reduce(array, mock, initialValue);
    expect(actual).toEqual(15);
  });
});
