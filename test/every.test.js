const everyItem = require('../lib/every');

describe('every function', () => {
  it('check numbers in array are true', () => {
    expect(everyItem([2, 4, 6], n => n % 2 === 0)).toBeTruthy();
  });

  it('check numbers in array are true', () => {
    expect(everyItem([1, 2, 6], n => n % 2 === 0)).toBeFalsy();
  });
});
