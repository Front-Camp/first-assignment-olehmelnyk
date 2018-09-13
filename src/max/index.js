/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  const array = arr.filter(i => {
    if (isFinite(i) && !isNaN(i)) {
      return true;
    }
  })

  return Math.max([...array]);
};

export default max;
