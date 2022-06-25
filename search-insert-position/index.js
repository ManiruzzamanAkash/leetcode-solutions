/**
 * Search and insert the target in the array.
 *
 * @param {number[]} nums
 * @param {number} target
 *
 * @return {number}
 */
var searchInsert = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num == target || num > target) { // two cases
      return parseInt(i);
    } else if (typeof nums[i + 1] !== "undefined" && nums[i + 1] > target) {
      return parseInt(i + 1);
    }
  }

  return nums.length;
};

module.exports = searchInsert;
