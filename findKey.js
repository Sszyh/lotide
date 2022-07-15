// const findKey = function(object, callback) {
//   let output = "";
//   for(let obj in object) {
//     if(callback(object[obj])) {
//     output = obj;
//     return output;
//     }
//   }
//   return output;
// }




const findKey = (obj, cb) => {
  for (let key in obj) {
    if (cb(obj[key])) {
      return key;
    }
  }
  return undefined;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉🎉🎉Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😈😈😈Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(findKey({
 "Blue Hill": { stars: 1 },
 "Akaleri":   { stars: 3 },
 "noma":      { stars: 2 },
 "elBulli":   { stars: 3 },
 "Ora":       { stars: 2 },
 "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

module.exports = findKey;
