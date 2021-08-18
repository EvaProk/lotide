const flatten = function(array) {
  let newArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let nestedElement of element) {
        newArray.push(nestedElement);
      }
    } else {
      newArray.push(element);
    }
  }
  return newArray;
};

console.log(flatten(['eva', 'valik', [3, 4], 5, ['roma']]));
console.log(flatten([1, 2, [3, 4], 5, [6]]));