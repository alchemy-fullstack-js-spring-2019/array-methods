function everyItem(array, callback) {
  let allAreTrue = true;
  for(let i = 0; i < array.length; i++) {
    if(!callback(array[i])) {
      allAreTrue = false;
    }
  }
  return allAreTrue;
}

module.exports = everyItem;
