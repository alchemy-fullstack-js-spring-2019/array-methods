/* eslint-disable */
const { map, filter, findIndex } = require('../lib/index');

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

describe('filter function', () => {
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

describe('findIndex function', () => {
  const mock = jest.fn(i => i > 5);
  it('returns the index of the first value that meets condition', () => {
    const expected = 6;
    const input = [1, 2, 3, , 4, 5, 6, 7];
    const result = findIndex(input, mock);

    expect(result).toEqual(expected);
  });
  
  it('returns the index of the first value that meets condition', () => {
    const expected = -1;
    const input = [1, 2, 3, 4, 5];
    const result = findIndex(input, mock);

    expect(result).toEqual(expected);
  });
});
