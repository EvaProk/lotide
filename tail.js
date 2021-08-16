
const assertEqual = function (actual, expected) {
  const emo1 = String.fromCodePoint(0x1F6D1);
  const emo2 = String.fromCodePoint(0x2705);

  if (actual.length !== expected.length) {
    console.log(`${emo1}${emo1}${emo1}Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`${emo1}${emo1}${emo1}Assertion Failed: ${actual} !== ${expected}`);
      return;
    }
  }

  console.log(`${emo2}${emo2}${emo2}Assertion Passed: ${actual} === ${expected}`);
};


const tail = function (array) {
  let tailArray = [];
  tailArray = array.slice(1);
  return tailArray;
};


const result = tail([7, 5, 5]);
assertEqual(result, [5, 5]);
