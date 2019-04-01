/* eslint-disable */
const { map, filter } = require('../lib/index');

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
    const expected = [2, 4,, 6];
    const input = [0, 2,, 4];
    const result = map(input, mock);
  
    expect(result).toEqual(expected);
    expect(result.length).toEqual(input.length);
  });
});

describe('filter test', () => {
  const mock = jest.fn(i => i > 5);
  it('returns a new array filtered by conditional', () => {
    const expected = [6, 8];
    const input = [2, 4, 6, 8];
    const result = filter(input, mock);

    expect(result).toEqual(expected);
  });
  
  it('filter filters out holes', () => {
    const expected = [6, 8];
    const input = [2, 4, 6,, 8];
    const result = filter(input, mock);

    expect(result).toEqual(expected);
  });
});
