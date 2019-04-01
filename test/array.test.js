const { map, filter } = require('../lib/array');

describe('map function', ()=> {
    it('takes an array and manipulates each item in the array, resulting in a new array', ()=> {
        const mock = jest.fn(n => n * 2);
        const result = map([1, 2, 3], mock);
        expect(result).toEqual([2, 4, 6]);
        expect(mock).toHaveBeenCalledTimes(3);
    });
});

describe('filter function', ()=> {
    it('takes an array and returns an array with the items that are truthy', ()=> {
        const mock = jest.fn(n => n % 2 === 0);
        const result = filter([2, 4, 7], mock);
        expect(result).toEqual([2, 4]);

    })
});
