const ourMap = (arr, mock) => {
  const arr2 = [];
  for(let i = 0; i < arr.length; i++) {
    arr2[i] = mock(arr[i]);
  }
  return arr2;
}

module.exports = {
  ourMap
};
