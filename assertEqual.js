const assertEqual = function (actual, expected) {
  const emo1 = String.fromCodePoint(0x1F6D1);
  const emo2 = String.fromCodePoint(0x2705);
  if (actual === expected) {
    console.log(`${emo2}${emo2}${emo2}Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${emo1}${emo1}${emo1}Assertion Failed: ${actual} !== ${expected}`);
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 7);