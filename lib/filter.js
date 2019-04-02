function filterArray(array, callback) {
  let arrayOut = [];
  for(let i = 0; i < array.length; i++) {
    if(callback(array[i])) {
      arrayOut[arrayOut.length] = array[i];
    }
  }
  return arrayOut;
}
module.exports = filterArray;
