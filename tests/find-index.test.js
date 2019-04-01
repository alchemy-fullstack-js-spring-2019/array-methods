const findIndex = require('../lib/find-index');

describe('find index', () => {
    it('takes [1, 2, 3] and isEven and returns 1', () => {
        const result = findIndex([1, 2, 3], n => n % 2 === 0);
        expect(result).toBe(1);
    });
    it('takes [1, 2, 3, 4] and isEven and returns 1', () => {
        const result = findIndex([1, 2, 3, 4], n => n % 2 === 0);
        expect(result).toBe(1);
    });
    it('takes [1, , 2, 3] and isEven and returns 1', () => {
        // eslint-disable-next-line no-sparse-arrays
        const result = findIndex([1, , 2, 3], n => n % 2 === 0);
        expect(result).toBe(2);
    });
    it('takes [1, , 3] and isEven and returns 1', () => {
        // eslint-disable-next-line no-sparse-arrays
        const result = findIndex([1, , 3], n => n % 2 === 0);
        expect(result).toBe(-1);
    });
});
