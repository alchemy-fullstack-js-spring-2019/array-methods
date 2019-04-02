function reduce(array, callback, initial) {
  let x = initial;
  let start = 0;
  if(!initial) {
    x = array[0];
    start = 1;
  } 

  for(let i = start; i < array.length; i++){
    x = callback(x, array[i]);  
  }
  return x;
}

module.exports = {
  reduce
};
