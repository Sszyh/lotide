const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("return [0] for ['hello']['h']", () => {
    assert.deepEqual(letterPositions("hello")["h"], [0]);
  });
  it("return [1] for ['hello']['e']", () => {
    assert.deepEqual(letterPositions("hello")["e"], [1]);
  });
  it("return [1] for ['hello']['l']", () => {
    assert.deepEqual(letterPositions("hello")["l"], [2,3]);
  });
  it("return [1] for ['hello']['o']", () => {
    assert.deepEqual(letterPositions("hello")["o"], [4]);
  });
}) 