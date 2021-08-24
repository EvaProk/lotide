const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️ ⛔️ ⛔️Assertion Failed: ${actual} !== ${expected}`);
  }

};

const findKey = function (object, callback) {
  let res = '';
  for (const key in object) {
    if (callback(object[key])) {
      res = key;
      return res;
    }
  }
}

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), 'noma');


assertEqual(findKey({
  "Day1": { lesson: "Math" },
  "Day2": { lesson: "English" },
  "Day3": { lesson: "Math" },
  "Day4": { lesson: "Science" },
  "Day5": { lesson: "Biology" },
  "Day6": { lesson: "Math" }
}, x => x.lesson === "Math"), 'Day1');

module.exports = findKey;

