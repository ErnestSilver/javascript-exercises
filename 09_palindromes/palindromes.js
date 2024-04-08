const palindromes = function (string) {
  const allowed = "qwertyuiopasdfghjklzxcvbnm1234567890";

  const word = string
    .toLowerCase()
    .split("")
    .filter((char) => allowed.includes(char))
    .join("");

  const reverseWord = word.split("").reverse().join("");

  return word === reverseWord;
};

// Do not edit below this line
module.exports = palindromes;
