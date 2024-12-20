const leapYears = function(year) {
    if (Number.isInteger(year/100)) {
        if (year%400 === 0) {
            return true;
        } else {
            return false;
        } 
    } else if (year%4 === 0) {
        return true;
    } else {
        return false;
    }
};

// console.log("1900: ", leapYears(1900));
// console.log("700: ", leapYears(700));

// Do not edit below this line
module.exports = leapYears;
