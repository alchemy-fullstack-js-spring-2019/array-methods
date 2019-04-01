function map(arr, callback) {

    let newArray = [...Array(arr.length)];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i]){
            newArray[i] = callback(arr[i]);
        }
       
    }
    return newArray;
}

module.exports = map;
