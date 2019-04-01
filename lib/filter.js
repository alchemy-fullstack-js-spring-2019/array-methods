function filter(arr, callback) {
   
    let result = [];
    let length = 0;

    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            result[length] = arr[i];
            length++;
        }
    }
    return result;
}

module.exports = filter;
