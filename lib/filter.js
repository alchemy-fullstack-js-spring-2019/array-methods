function filterArray(array, callback) {
  let arrayOut = [];
  let trueCounter = 0;
  for(let i = 0; i < array.length; i++) {
    if(callback(array[i])) {
      arrayOut[trueCounter] = array[i];
      trueCounter++;
    }
  }
  return arrayOut;
}
module.exports = filterArray;
