const middle = function(array) {
  let resultArray = [];
  let midIndex = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return resultArray;
  }

  if (array.length % 2 === 0) {
    resultArray.push(array[midIndex - 1]);
    resultArray.push(array[midIndex]);
  } else if (array.length % 2 !== 0) {
    resultArray.push(array[midIndex]);
  }
  return resultArray;
};


module.exports = middle;











