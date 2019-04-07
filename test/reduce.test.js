const {
  reduce
} = require('../lib/reduce');

it('reduce function', () => {
  const sum = reduce([2, 4], element => {
    return element[0] + element[1];
  });
  expect(sum).toEqual(6);
});
