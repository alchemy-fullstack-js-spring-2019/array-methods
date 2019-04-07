const { filter } = require('../lib/filter');

describe('filter function', () => {
  it('create a new array of truthy items', () => {
    const mock = jest.fn(n => n > 3);
    expect(filter([1, 2, 3, 4, 5], mock)).toEqual([4, 5]);
  });
  
});
