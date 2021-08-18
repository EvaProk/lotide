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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);