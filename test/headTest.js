
const assert = require("chai").assert;
const head = require("../head");

describe("#head", () => {
  it("return 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1,2,3]),1);
  });

  it("return '5' for [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]), 5);
  });
  it("return 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

});