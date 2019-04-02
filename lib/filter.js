const filter = (arr, callback) => {
  const arr2 = [];
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) {
      arr2[arr2.length] = arr[i];
    } 
  }
  return arr2;
};

module.exports = {
  filter
};
