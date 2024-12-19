const reverseString = function(text) {
    result = "";
    len = text.length;
    for (let i = 0; i < len; i++) {
        result += text[len-1-i];
    };
    return result;
};

// Do not edit below this line
module.exports = reverseString;
