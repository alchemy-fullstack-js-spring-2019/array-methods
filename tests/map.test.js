const map = require('../lib/map');

//takes array and callback, returns new array with the array values transformed by the callback

describe('array map', () => {
    it('takes array [1, 2, 3] and function double, returns [2, 4, 6]', () => {
        const result = map([1, 2, 3], n => n * 2);
        expect(result).toEqual([2, 4, 6]);
    });
    it('takes array [2, 4, 6] and function plusOne, returns [3, 5, 7]', () => {
        const result = map([2, 4, 6], n => n + 1);
        expect(result).toEqual([3, 5, 7]);
    });
    it('takes array [2, , 3] and function double, returns [4, , 6]', () => {
        //eslint-disable-next-line
        const result = map([2, , 3], n => n * 2);
        //eslint-disable-next-line
        expect(result).toEqual([4, , 6]); 
    });
});


