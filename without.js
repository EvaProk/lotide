const assertArraysEqual = function(actual, expected) {
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



const without = function(sorce, itemsToRemove) {
  let newArray = sorce.filter(function(src) {
    return !itemsToRemove.includes(src);
  });
  return newArray;
};




const words = ["hello", "world", "lighthouse"];
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without(words, ["lighthouse"]));
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['1', '2']);
assertArraysEqual(without([1, 2, 3], [1]), [1, 3]);

