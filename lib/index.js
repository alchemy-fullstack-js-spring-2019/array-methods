function map(array, callback) {
  let result = [];
  for(let i = 0; i < array.length; i++) {
    if(array.hasOwnProperty(i)) {
      result[i] = callback(array[i], i);
    }
  }  
  return result;
}

function filter(array, callback) {
  let result = [];
  for(let i = 0; i < array.length; i++) {
    if(array.hasOwnProperty(i)) {
      if(callback(array[i], i)) {
        result[result.length] = array[i];
      }
    }
  }
  return result;
}

function findIndex(array, callback) {
  for(let i = 0; i < array.length; i++) {
    if(callback(array[i], i)) {
      return i;
    }
  }
  return -1;
}

function reduce(array, callback, initial) {
  let accumulator;
  if(initial) {
    accumulator = initial;
  } else {
    for(let i = 0; i < array.length; i++) {
      if(array.hasOwnProperty(i)) {
        accumulator = array[i];
        break;
      }
    }
  }
  
  for(let i = 0; i < array.length; i++) {
    if(array.hasOwnProperty(i)) {
      accumulator = callback(accumulator, array[i], i);
    }
  }
  return accumulator;
}

function every(array, callback) {
  for(let i = 0; i < array.length; i++) {
    if(array.hasOwnProperty(i)) {
      if(!callback(array[i], i)) {
        return false;
      }
    }
  }
  return true;
}

function forEach(array, callback) {
  for(let i = 0; i < array.length; i++) {
    if(array.hasOwnProperty(i)) {
      callback(array[i], i);
    }
  }
}

module.exports = {
  map,
  filter,
  findIndex,
  reduce,
  every,
  forEach
};
