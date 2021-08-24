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

const letterPositions = function(sentence) {
  const results = {};
  const newArray = sentence.toLowerCase();
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === ' ') {
      continue;
    }
    if (Array.isArray(results[newArray[i]])) {
      results[newArray[i]].push(i);
    } else {
      results[newArray[i]] = [i];
    }
  }

  return results;
};

console.log(letterPositions('lighthouse in the house'));
assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;


