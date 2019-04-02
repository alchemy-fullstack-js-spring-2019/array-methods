function mapResult(array, callback) {
  let arrayOut = [];
  for(let i = 0; i < array.length; i++) {
    if(array.hasOwnProperty(i)) {
      arrayOut[i] = callback(array[i]);
    }
  }
  return arrayOut;
}

module.exports = { mapResult };
