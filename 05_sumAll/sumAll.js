const sumAll = function(start, end) {
    //check type of input return error for negative, non-integer and non-numbers
    if (typeof start !== 'number' || !Number.isInteger(start) || start < 0 || typeof end !== 'number' || !Number.isInteger(end) || end < 0) {
        return "ERROR"
    };

    //large number first
    if (start > end) {
        let hold = start;
        start = end;
        end = hold;
    };

    //loop through range of numbers
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
