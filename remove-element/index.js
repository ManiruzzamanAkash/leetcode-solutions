/**
 * Remove an element from the array.
 *
 * @param {number[]} nums
 *
 * @return {number}
 */
var removeElement = function(nums, val) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      ++i;
    }
  }

  return nums.length;
};

module.exports = removeElement;
