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


module.exports = head;

