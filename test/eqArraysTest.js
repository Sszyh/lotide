const eqArrays = require("../eqArrays.js");
const assert = require("chai").assert;

describe("#eqArrays", () => {
  it("return false for ([1,2,3], [1,2])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2]), false);
    
  })
  it("return true for ([1,2,3], [1,2,3]", () => {
    assert.strictEqual(eqArrays([1,2,3], [1,2,3]), true);
  })
});