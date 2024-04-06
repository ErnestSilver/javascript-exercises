const reverseString = function (string) {
  const characters = string.split("");
  const backwards = characters.reverse();
  let newString = "";
  for (let i = 0; i < backwards.length; i++) {
    newString += backwards[i];
  }
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
