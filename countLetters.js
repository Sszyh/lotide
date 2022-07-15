const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉🎉🎉Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😈😈😈Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(inputString) {
  const outputObject = {};
  for (let letter of inputString) {
    if (letter !== " ") {
      if (outputObject[letter]) {
        outputObject[letter] += 1;
      } else {
        outputObject[letter] = 1;
      }
    }
  }
  return outputObject;
};
//console.log(outputObject);
//const result = countLetters("lll Hi");
//assertEqual(result.l, 3);
//assertEqual(result.H, 1);
//assertEqual(result.i, 1);
//assertEqual(result[" "], undefined);

module.exports = countLetters;