function reduceArray(array, callback, init) {
  let total = array[0];

  if(init || init === 0) {
    total = init;
    for(let i = 0; i < array.length; i++) {
      total = callback(total, array[i]);
    }
  }
  else if(!init) {
    for(let i = 1; i < array.length; i++) {
      total = callback(total, array[i]);
    }
  }
  return total;
}

module.exports = reduceArray;
