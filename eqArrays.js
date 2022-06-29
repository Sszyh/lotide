const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉🎉🎉Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😈😈😈Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(array1, array2) {
  let result = true;
  if (Array.isArray(array1) && Array.isArray(array2)) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        result = false;
      }
    }
  }
  return result;
};
// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);