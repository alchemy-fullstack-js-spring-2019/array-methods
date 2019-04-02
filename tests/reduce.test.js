const reduce = require('../lib/reduce');

describe('reduce', () => {
    it('takes array [1, 2, 3] and callback sum and returns 6', () => {
        const result = reduce([1, 2, 3], (n, a) => a += n);
        expect(result).toBe(6);
    });
    it('takes array [1, 2, 3] callback sum, and starting value and returns 9', () => {
        const result = reduce([1, 2, 3], (n, a) => a += n, 3);
        expect(result).toBe(9);
    });
    it('takes array [1, , 3] callback sum, and starting value and returns 7', () => {
        //eslint-disable-next-line
        const result = reduce([1, , 3], (n, a) => a += n, 3);
        expect(result).toBe(7);
    });
});
