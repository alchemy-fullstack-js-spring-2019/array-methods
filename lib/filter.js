function filter(array, callback) {
  const newArray = [];
  for(let i = 0; i < array.length; i++){
    if(callback(array[i])) {
      newArray[newArray.length] = array[i];  
    }
  }
  return newArray;
}

module.exports = {
  filter
};
