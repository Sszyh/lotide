//const eqArrays = function(array1, array2) {
//  if (Array.isArray(array1) && Array.isArray(array2)) {
//    if (array1.length !== array2.length) {
//      return false;
//    }
//    
//    for (let i = 0; i < array1.length; i++) {
//      if (array1[i] !== array2[i]) {
//        return false;
//      }
//    }
//    return true;
//  }
//};

const eqArrays = require("./eqArrays.js");

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🎉🎉🎉Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😈😈😈Assertion Failed: ${actual} !== ${expected}`);
  }
};

//assertArraysEqual([1,2,5],[1,2,3]);

module.exports = assertArraysEqual