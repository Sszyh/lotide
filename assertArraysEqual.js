const eqArrays = require("./eqArrays.js");

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🎉🎉🎉Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😈😈😈Assertion Failed: ${actual} !== ${expected}`);
  }
};

//assertArraysEqual([1,2,5],[1,2,3]);

module.exports = assertArraysEqual;