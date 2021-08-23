const assert = require('chai').assert;
const middle  = require('../middle');

describe("Should return middle element in array(if the array has even number of elements , return 2 middle elem.) ", () => {
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); 
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]); 
  });

  it("returns empty array  for [1]", () => {
    assert.deepEqual(middle([1]), []); 
  });

  it("returns empty array  for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []); 
  });

  it("returns ['roma', 'valik']  for ['eva', 'roma', 'valik', 'volodya']", () => {
    assert.deepEqual(middle(['eva', 'roma', 'valik', 'volodya']), ['roma', 'valik']); 
  });

});