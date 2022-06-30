const letterPosition = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if(results[sentence[i]]){
        results[sentence[i]].push(i)
      } else {
        results[sentence[i]] = []
        results[sentence[i]].push(i)
      }
    }
  }
  return results;
}

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

assertArraysEqual(letterPosition("hello")["h"], [0]);
assertArraysEqual(letterPosition("hello")["e"], [1]);
assertArraysEqual(letterPosition("hello")["l"], [2,3]);
assertArraysEqual(letterPosition("hello")["0"], [4]);