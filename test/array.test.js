const { map, filter, findIndex, reduce, every } = require('../lib/array');

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

    });
});

describe('findIndex function', ()=> {
    it('this takes an array and number and returns the index of said number', ()=> {
        const mock = jest.fn(n => n % 2 === 0);
        const result = findIndex([5, 7, 9, 11, 8], mock);
        expect(result).toEqual(4);
    });
    it('this takes an array and number and returns -1 if no index found', ()=> {
        const mock = jest.fn(n => n % 2 === 0);
        const result = findIndex([5, 7, 9, 11, 21], mock);
        expect(result).toEqual(-1);
    });
});

describe('reduce function', () => {
    it('takes an array and reduces it to its sum', () => {
        const mock = jest.fn((accumulator, currentValue) => accumulator * currentValue);
        const result = reduce([1, 2, 3], mock);
        expect(result).toEqual(6);
    });
    it('takes an array and reduces it to its sum plus an initial value', () => {
        const mock = jest.fn((accumulator, currentValue) => accumulator * currentValue);
        const result = reduce([1, 2, 3], mock, 5);
        expect(result).toEqual(30);
    });
});

describe('every function', () => {
    it('return true if every item in array is true', () => {
        const mock = jest.fn(n => n % 2 === 0);
        const result = every([2, 4, 6, 8], mock);
        expect(result).toBeTruthy();
    });
    
    it('return false if any item is false', () => {
        const mock = jest.fn(n => n % 2 === 0);
        const result = every([2, 5, 6, 8], mock);
        expect(result).toBeFalsy();
    });
});
