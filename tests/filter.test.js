const filter = require('../lib/filter');

describe('array filter', () => {
    it('takes array [1, 2, 4, 5] and isEven function and returns [2, 4]', () => {
        const result = filter([1, 2, 4, 5], n => n % 2 === 0);
        expect(result).toEqual([2, 4]);
    });
    it('takes array [1, , 4, 5] and isEven function and returns [4]', () => {
        //eslint-disable-next-line
        const result = filter([1, , 4, 5], n => n % 2 === 0);
        expect(result).toEqual([4]);
    });
});
