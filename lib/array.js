function map(array, callback) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i]);
    }
    return newArray;
}

function filter(array, callback) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            newArray = [...newArray, array[i]];
        }
    }
    return newArray;
}



module.exports = { 
    map, 
    filter
};
