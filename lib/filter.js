function filter(arr, callback) {
    let length = 0;
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            length++;
        }
    }
    let result = [...Array(length)];
    let j = 0;
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            result[j] = arr[i];
            j++;
        }
    }
    return result;
}

module.exports = filter;
