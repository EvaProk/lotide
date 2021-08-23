const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');


assertArraysEqual(tail([7, 5, 5]), [5, 5]); // pass
assertArraysEqual(tail([3, 4, 5, 3]), [4, 5, 3]); // pass
assertArraysEqual(tail(['Eva', "Roma", "Valik", "tanya", "Marik"]), ["Roma", "Valik", "tanya", "Marik"]); //pass
assertArraysEqual(tail(['Eva', "Roma", "Valik", "tanya", "Marik"]), ["tanya", "Marik"]); //fail