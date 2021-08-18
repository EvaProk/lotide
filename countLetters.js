const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️ ⛔️ ⛔️Assertion Failed: ${actual} !== ${expected}`);
  }


}; const countLetters = function(string) {
  let countObject = {};
  const newArray = string.split(" ").join("").toLowerCase();
  for (let letter of newArray) {
    if (countObject[letter]) {
      countObject[letter] += 1;
    } else {
      countObject[letter] = 1;
    }
  }
  return countObject;
};

console.log(countLetters("lighthouse in the house"));
assertEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });