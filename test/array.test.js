const map = require('../lib/array');

describe('map function', ()=> {
    it('create map function', ()=> {
        const mock = jest.fn(n => n * 2);
        const result = map([1, 2, 3], mock);
        expect(result).toEqual([2, 4, 6]);
        expect(mock).toHaveBeenCalledTimes(3);
    });
});
