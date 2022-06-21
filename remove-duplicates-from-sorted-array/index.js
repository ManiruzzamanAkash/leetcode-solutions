/**
 * Remove duplicates from array.
 *
 * @param {number[]} nums
 *
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const hashMap = {};
  let totalFound = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (!(num in hashMap)) {
      hashMap[num] = i;

      // Store total found
      totalFound++;

      // Modify the array
      nums[totalFound - 1] = num;
    }
  }

  return totalFound;
};

module.exports = removeDuplicates;
