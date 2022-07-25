
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

module.exports = middle;


