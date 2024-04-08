const fibonacci = function (num) {
  const fibonacci = [1];
  let number = Number(num);
  if (number > 0) {
    let first = 0;
    for (let i = 0; i < number; i++) {
      fibonacci.push(first + fibonacci[i]);
      first = fibonacci[i];
    }
    return fibonacci[num - 1];
  } else if (number === 0) {
    return 0;
  } else {
    return "OOPS";
  }
};
fibonacci(15);
// Do not edit below this line
module.exports = fibonacci;
