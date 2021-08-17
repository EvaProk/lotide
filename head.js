const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️ ⛔️ ⛔️Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  let firstElement = array[0];
  return firstElement;
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["HelloEva", "Lighthouse", "Labs"]), "Hello");