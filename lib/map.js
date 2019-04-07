const ourMap = (arr, callback) => {
  const arr2 = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i)) {
      arr2[i] = callback(arr[i]); 
    } 
  }
  return arr2;
};

module.exports = {
  ourMap
};
