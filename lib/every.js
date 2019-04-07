function every(array, callback) {
  const falseArray = [];
  for(let i = 0; i < array.length; i++) {
    const element = array[i];
    if(callback(element) === true) {
      return true;
    } else {
      falseArray.push('false');
    }
  }
  if(falseArray.length > 0) {
    return false;
  } else {
    return true;
  }
}

module.exports = { every };
