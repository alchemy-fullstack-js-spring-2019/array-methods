function reduce(array, callback, initial) {
  let x = 0;
  if(!initial) {
    x = array[0];
  } else {
    x = 0;
  }

  for(let i = 0; i < array.length; i++){
    x = callback(x, array[i]);  
  }
  return x - array[0];
}

module.exports = {
  reduce
};
