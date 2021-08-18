const assertArraysEqual = function (actual, expected) {
  if (actual.length !== expected.length) {
    console.log(`⛔️ ⛔️ ⛔️Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`⛔️ ⛔️ ⛔️Assertion Failed: ${actual} !== ${expected}`);
      return;
    }
  }
  console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  return;
};


const eqArrays = function (actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};


const middle = function (array) {
  let resultArray = [];
  let midIndex = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return resultArray;
  }

  if (array.length % 2 === 0) {
    resultArray.push(array[midIndex - 1])
    resultArray.push(array[midIndex]);
  } else if (array.length % 2 !== 0) {
    resultArray.push(array[midIndex]);
  }
  return resultArray;
}

console.log(middle([1, 2, 3, 4]))  // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // =>[3, 4]
console.log(middle([1, 2, 3]))// => [2]
console.log(middle([1, 2, 3, 4, 5]))// => [3]
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []


assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle(['eva', 'roma', 'valik', 'volodya']), ['roma', 'valik']);











