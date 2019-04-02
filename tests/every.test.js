const every = require('../lib/every');

describe('check if callback returns true for every array item', () => {
    it('take [2, 4, 6] and isEven and returns true', () => {
        const result = every([2, 4, 6], n => n % 2 === 0);
        expect(result).toBe(true);
    });
    it('take [2, , 4, 6] and isEven and returns true', () => {
        // eslint-disable-next-line no-sparse-arrays
        const result = every([2, , 4, 6], n => n % 2 === 0);
        expect(result).toBe(true);
    });
    it('take [2, 3, 6] and isEven and returns false', () => {
        const result = every([2, 3, 6], n => n % 2 === 0);
        expect(result).toBe(false);
    });
    it('take [2, , 3, 6] and isEven and returns false', () => {
        // eslint-disable-next-line no-sparse-arrays
        const result = every([2, , 3, 6], n => n % 2 === 0);
        expect(result).toBe(false);
    });
});
