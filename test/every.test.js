const { every } = require('../lib/every');

describe('every', () => {
  it('checks that all items in array return true', () => {
    const array = [1, 2, 5, 7, 8];
    const checks = every(array, element => {
      if(array.length > 0) {
        return element === true;
      }
    });
    expect(checks).toBeTruthy;
  });
});
