function reduce(arr, callback, initialValue) {
    let acc = 0;
    if(initialValue){
        acc = initialValue;
    }
    for(let i = 0; i < arr.length; i++) {
        acc = callback(arr[i], acc);
    }  
    return acc; 
}

module.exports = reduce;
