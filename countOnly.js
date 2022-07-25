

const countOnly = (allItems, itemsToCount) => {
  const results = {};
  for (const item of allItems) {
    for (let name in itemsToCount) {
      if (itemsToCount[name]) {
        if (name === item) {
          if (results[item]) {
            results[item] += 1
          } else {
            results[item] = 1
          }
        }
      }
    }
  }
  return results;
}




module.exports = countOnly;