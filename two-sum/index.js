/**
 * Two sum Problem leetcode.
 *
 * @param {number[]} nums
 * @param {number} target
 *
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    // If the difference is in the hashmap, return the indices.
    if (diff in hashmap) { // or, hashmap[diff] !== undefined
      return [hashmap[diff], i];
    }

    // Otherwise, add the current number to the hashmap.
    hashmap[nums[i]] = i;
  }

  return [];
};

module.exports = twoSum;
