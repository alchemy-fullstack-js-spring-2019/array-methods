function findIndex(arr, fn) {  
  for(let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    if(fn(ele)) return i;
  } 
}

module.exports = {
  findIndex
};
