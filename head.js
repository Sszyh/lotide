//const assertEqual = require("./assertEqual");


//const assertEqual = function(actual, expected) {
//  if (actual === expected) {
//    console.log(`🎉🎉🎉Assertion Passed: ${actual} === ${expected}`);
//  } else {
//    console.log(`😈😈😈Assertion Failed: ${actual} !== ${expected}`);
//  }
//};
//
// TEST CODE
//assertEqual("Bootcamp", "Bootcamp");
//assertEqual(1, 2);

const head = function(array) {
  let output;
  if (array === []) {
    output =  undefined;
  } else {
    output = array[0];
  }
  return output;
};

//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head