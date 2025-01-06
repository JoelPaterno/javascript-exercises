const add = function(first, second) {
  return first + second;
};

const subtract = function(first, second) {
	return first - second;
};

const sum = function(arr) {
  if (arr.length === 0) {
    return 0;
  } else { 
    return arr.reduce((total, currentItem) => {
      return total + currentItem;
    });
  };
};

const multiply = function(arr) {
  if (arr.length === 0) {
    return 0;
  } else { 
    return arr.reduce((total, currentItem) => {
      return total * currentItem;
    });
  };
};

const power = function(first, second) {
	return first ** second;
};

const factorial = function(num) {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  };
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
