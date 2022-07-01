const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const takeUntil = function(array, callback) {
  const result = [];
  for (let ar of array) {
    if (callback(ar)){
      return result;
    }
    result.push(ar);
  }
  return result;
}
const results1 = takeUntil(data1, (x) => {return x < 0});
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🎉🎉🎉Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😈😈😈Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2,[ "I've", 'been', 'to', 'Hollywood' ]);