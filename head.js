//const assertEqual = require("./assertEqual");

const head = function(array) {
  let output;
  if (array === []) {
    output = undefined;
  } else {
    output = array[0];
  }
  return output;
};

// TEST CODE
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(1, 2);
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;

