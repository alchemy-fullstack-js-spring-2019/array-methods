function findIndex(arr, callback) {
    let i = 0;
    for(i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            return i;
        }
    }
    return -1;
}

module.exports = findIndex;
