const eqArrays = require('../eqArrays');    // Import head function
const assertEqual = require('../assertEqual'); //Import assertEqual function

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // fail
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); //fail 