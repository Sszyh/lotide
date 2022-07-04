

const assert = require("chai").assert;
const middle = require("../middle.js");

describe("#middle", () => {
  it("return 5 for [2,4,5,4,3]", () => {
    assert.deepEqual(middle([2,4,5,4,3]), [5]);
  });

  it("return [2,3] for [4,3,2,3,8,7]", () => {
    assert.deepEqual(middle([4,3,2,3,8,7]), [2,3]);
  
  });
});