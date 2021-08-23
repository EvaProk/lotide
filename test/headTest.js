const head = require('../head');    // Import head function
const assertEqual = require('../assertEqual'); //Import assertEqual function




assertEqual(head([5, 6, 7]), 5);                                // test cases 
assertEqual(head(["HelloEva", "Lighthouse", "Labs"]), "Hello"); // test cases 