// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`🎉🎉🎉Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`😈😈😈Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const findKeyByValue = function(object, value) {
  let keyArray = Object.keys(object);
  let output = "";
  for (let key of keyArray) {
    if (object[key] === value) {
      output = key;
    } else {
      output = undefined;
    }
  }
  return output;
};

//const bestTVShowsByGenre = {
//  sci_fi: "The Expanse",
//  comedy: "Brooklyn Nine-Nine",
//  drama:  "The Wire"
//};
//
//assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;