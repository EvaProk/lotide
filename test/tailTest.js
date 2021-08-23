const assert = require('chai').assert;
const tail = require('../tail');

describe("Should return the array without the first element ", () => {
  it("returns [5, 5] for [7, 5, 5]", () => {
    assert.deepEqual(tail([7, 5, 5]), [5, 5]);
  });
  it("returns [4, 5, 3] for [3, 4, 5, 3]", () => {
    assert.deepEqual(tail([3, 4, 5, 3]), [4, 5, 3]); 
  });
  it("returns [Roma, Valik, tanya, Marik] for [Roma, Valik, tanya, Marik", () => {
    assert.deepEqual(tail(['Eva', "Roma", "Valik", "tanya", "Marik"]), ["Roma", "Valik", "tanya", "Marik"]); 
  });

});