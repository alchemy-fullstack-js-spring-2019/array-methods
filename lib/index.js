function map(array, callback) {
  let result = [];
  for(let i = 0; i < array.length; i++) {
    if(array.hasOwnProperty(i)) {
      result[i] = callback(array[i]);
    }
  }  
  return result;
}

function filter(array, callback) {
  let result = [];
  for(let i = 0; i < array.length; i++) {
    if(array.hasOwnProperty(i)) {
      if(callback(array[i])) {
        result[result.length] = array[i];
      }
    }
  }
  return result;
}

module.exports = {
  map,
  filter
};
