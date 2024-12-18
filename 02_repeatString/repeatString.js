const repeatString = function(text, repeats) {
    if (repeats > -1) {
        result = "";
        for (let i = 0; i < repeats; i++) {
            result += text;
        };
        return result;
    };
    return 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;
