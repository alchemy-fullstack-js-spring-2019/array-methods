const { every } = require('../lib/every');

describe('every!', () => {
  it('take an array and callback and return an overall true if everything matches, else returns false', () => {
    let array = [1, 2, 3];
    const odd = n => n % 2 !== 0;
    const actual = every(array, odd);
    expect(actual).toEqual(false);
  });

  it('take an array and callback and return an overall true if everything matches, else returns false', () => {
    let array = [1, 3, 5];
    const odd = n => n % 2 !== 0;
    const actual = every(array, odd);
    expect(actual).toEqual(true);
  });
  it('take an array and callback and return an overall true if everything matches, else returns false', () => {
    let array = [1, 3, 5, 7, 8];
    const odd = n => n % 2 !== 0;
    const actual = every(array, odd);
    expect(actual).toEqual(false);
  });
});
