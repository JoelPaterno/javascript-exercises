const findTheOldest = function(arr) {
    let oldestAge = 0;
    let oldestPerson = "";
    arr.forEach((e) => {
        if (e.yearOfDeath - e.yearOfBirth > oldestAge) {
            oldestAge = (e.yearOfDeath - e.yearOfBirth);
            oldestPerson = e;
        };
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
