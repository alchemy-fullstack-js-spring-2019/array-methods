const map = require('../lib/map');
//takes array and callback, returns new array with the array values transformed by the callback

describe('array map', () => {
    it('takes array [1, 2, 3] and function double, returns [2, 4, 6]', () => {
        const result = map([1, 2, 3], n => n * 2);
        expect(result).toEqual([2, 4, 6]);
    });
});
