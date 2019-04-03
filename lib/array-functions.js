function mapArray(arr, callback) {
  const newArray = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr.hasOwnProperty(i)) {
      newArray[i] = callback(arr[i]);
    } 
  }
  return newArray;
}

// function filterArray(arr, shouldBePartOfNewArray) {
//   let newArray = [];
//   for(let i = 0; i < arr.length; i++) {
//     if(arr.hasOwnProperty(i) && shouldBePartOfNewArray(arr[i])) {
//     // newArray[i] = arr[i];
//       newArray[i] = callback(arr[i]);
//     }
//     return newArray;
//   }
// }

module.exports = {
  mapArray,
  // filterArray
};
