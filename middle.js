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
//};//

//const assertArraysEqual = function(array1, array2) {
//  if (eqArrays(array1, array2)) {
//    console.log("🎉🎉🎉Assertion Passed");
//  } else {
//    console.log("😈😈😈Assertion Failed");
//  }
//};


const middle = function(middleInput) {
  let index = 0;
  let outputArray = [];
  if (middleInput.length > 2) {
    if (middleInput.length % 2 === 0) {
      index = middleInput.length / 2
      outputArray.push(middleInput[index - 1]);
      outputArray.push(middleInput[index]);
    } if (middleInput.length % 2 === 1) {
      index = (middleInput.length - 1) / 2;
      outputArray.push(middleInput[index]);
    }
  }
  return outputArray;
};

//assertArraysEqual(middle([2,4,5,4,3]), [5]);

module.exports = middle;


