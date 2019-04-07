function reduce(array) {
  var reducedArray = 0;
  for(let i = 0; i < array.length; i++) { 
    const element = array[i];
    reducedArray += element;    
  }
  return reducedArray;
}
module.exports = { reduce };
