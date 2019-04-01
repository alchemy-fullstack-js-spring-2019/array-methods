const map = require('../lib/index');

describe('Map function', () => {
  const mock = jest.fn(n => n + 2);

  it('Applies function to every index in an array and returns a new array', () => {
    const expected = [2, 4, 6];
    const input = [0, 2, 4];
    const result = map(input, mock);

    expect(result).toEqual(expected);
    expect(mock).toHaveBeenCalledTimes(input.length);
  });

  it('map ignore holes in array', () => {
    /* eslint-disable */
    const expected = [2, 4,, 6];
    const input = [0, 2,, 4];
    const result = map(input, mock);
  
    expect(result).toEqual(expected);
  });
});
