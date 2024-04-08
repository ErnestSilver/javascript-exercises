const convertToCelsius = function (temp) {
  let cels = (temp - 32) / 1.8;
  let rounded = Math.round(cels * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function (temp) {
  let fahr = temp * 1.8 + 32;
  let rounded = Math.round(fahr * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
