const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🎉🎉🎉Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😈😈😈Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (Array.isArray(array1) && Array.isArray(array2)) {
    if (array1.length !== array2.length) {
      return false;
    }

    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

// const flatten = function(arr) {
//   let flattenArr = [];
//   for (let elm of arr) {
//     //console.log(elm);
//   if (Array.isArray(elm)) {
//     flattenArr.push(flatten(elm));
//     //flattenArr.push(elm)
//     //console.log(elm);
//   } else {
//   flattenArr.push(elm);
//   }
// }
// return flattenArr;
// };

const flatten = (nestArr) => {
  let array = []
  for (let elm of nestArr) {
    if (Array.isArray(elm)) {
      for (let e of elm) {
        array.push(e);
      }
    } else {
      array.push(elm);
    }
  }
  return array;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));
//console.log(flatten([1, 2, [[3, 4], 5], [6]]));


