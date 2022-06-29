

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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("🎉🎉🎉Assertion Passed");
  } else {
    console.log("😈😈😈Assertion Failed");
  }
};

assertArraysEqual([1,2,3],[1,2]);