const assert = require('chai').assert;
const _ = require("../index");

describe("returns an array, without nested arrays", () => {
 
  it("returns ['eva', 'valik', 3, 4, 5, 'roma'] for ['eva', 'valik', [3, 4], 5, ['roma']]", () => {
    assert.deepEqual(_.flatten(['eva', 'valik', [3, 4], 5, ['roma']]), ['eva', 'valik', 3, 4, 5, 'roma']);
  });
  
});

