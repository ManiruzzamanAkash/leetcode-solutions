/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const numsCounted = {};
    let majorityNum, majorityNumCount = 0;

    // Using hashmap to store number and their total count
    // and then get the top counted number.
    nums.forEach(num => {
        numsCounted[num] = numsCounted[num] ? ++numsCounted[num] : 1;
        
        if (numsCounted[num] > majorityNumCount) {
        	majorityNumCount = numsCounted[num];
            majorityNum = num;
        }
    });

    return majorityNum;
};