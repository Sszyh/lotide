

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


module.exports = flatten;