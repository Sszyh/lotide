/*
const eqArrays = function(array1, array2) {
  let result = false;
  if (Array.isArray(array1) && Array.isArray(array2)) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        result = true;
      }
    }
  }
  return result;
};
*/

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("🎉🎉🎉Assertion Passed");
  } else {
    console.log("😈😈😈Assertion Failed");
  }
};

const without = function(source, itemsToRemove) {
  let outputArray = [...source];
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let j = 0; j < source.length; j++) {
      if (itemsToRemove[i] === source[j]) {
        outputArray.splice(j,1);
      }
    }
  }
  return outputArray;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
