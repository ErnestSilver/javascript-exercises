const removeFromArray = function (arr, ...args) {
  //   const arg = [...arguments];
  let newArray = [];

  if (args.length > 1) {
    newArray = arr;

    for (let i = 0; i < args.length; i++) {
      for (let x = 0; x < arr.length; x++) {
        if (arr[x] === args[i]) {
          newArray.splice(x, 1);
        }
      }
    }
    // for (let i = 0; i < arr.length; i++) {
    //   for (let x = 0; x < args.length; x++) {
    //     if (arr[i] !== args[x]) {
    //       newArray.splice(i, 0, arr[i]);
    //     }
    //   }
    // }
  } else if (args.length == 1) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== args[0]) {
        newArray.splice(i, 0, arr[i]);
      }
    }
  }

  return newArray;
};
console.log(removeFromArray([1, 2, 2, 3], 2));
// Do not edit below this line
module.exports = removeFromArray;
