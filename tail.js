
const assertEqual = function(actual, expected) {
  if (actual.length !== expected.length) {
    console.log(`⛔️ ⛔️ ⛔️ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`$⛔️ ⛔️ ⛔️Assertion Failed: ${actual} !== ${expected}`);
      return;
    }
  }

  console.log(`✅ ✅ ✅  Assertion Passed: ${actual} === ${expected}`);
};


const tail = function(array) {
  return array.slice(1);
};


const result = tail([7, 5, 5]);
assertEqual(result, [5, 5]);
