const removeFromArray = function(array, ...remove) {
    
    let result = array.filter((element) => {
        if (remove.includes(element)) {
            return false;
        } else {
            return true;
        };
    });
    return result;
};

//console.log(removeFromArray([1, 2, 3, 4], 3));
console.log(removeFromArray([1, 2, 2, 3], 2, 3));
// Do not edit below this line
module.exports = removeFromArray;
