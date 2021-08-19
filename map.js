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


const words = ["456", "6578", "ty675o", "mhfgbcjajor", "211"];
const words1 = [3, "control", "to", "major", "tom"];
const words2 = ["Aground", " control", "to", "major", "tom"];
const words3 = ["ground", "control", "to", "major", "tom"];
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const results = map(words, word => word[0]);
const results1 = map(words1, word => word[0]);
const results2 = map(words2, word => word[0]);
const results3 = map(words3, word => word[0]);
// console.log(results1);

assertArraysEqual(results, ["4", "6", "t", "m", "2"]);
assertArraysEqual(results1, [, 'c', 't', 'm', 't']);
assertArraysEqual(results2, ['A', ' ', 't', 'm', 't']);
assertArraysEqual(results3, ['g', 'c', 't', 'm', 't']);