const convertToCelsius = function(fahrenhiet) {
  return Math.round(((fahrenhiet - 32) * (5/9)) * 10) / 10;
};

const convertToFahrenheit = function(celcius) {
  return Math.round(((celcius * (9/5)) + 32) * 10) / 10;
};

// console.log("73.2: ", convertToFahrenheit(73.2), "expected: 163.8");
// console.log("-10: ", convertToFahrenheit(-10), "expected: 14");
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
