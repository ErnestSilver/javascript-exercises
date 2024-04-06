const repeatString = function (string, num) {
  let word = string;
  let new_word = word;
  if (num > 0) {
    for (let index = 1; index < num; index++) {
      new_word += word;
    }
  } else if (num == 0) {
    new_word = "";
  } else {
    new_word = "ERROR";
  }
  return new_word;
};

// Do not edit below this line
module.exports = repeatString;
