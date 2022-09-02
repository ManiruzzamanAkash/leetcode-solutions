/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let numsCounted = {};
    const elements = [];

    // Using hashmap to store number and their total count
    // and then get the top counted number.
    nums.forEach(num => {
    	if (typeof numsCounted[num] !== 'undefined') {
        	numsCounted[num]++;
        } else {
        	numsCounted[num] = 1;
        }
        
        if (numsCounted[num] > parseInt(nums.length / 3) && !elements.includes(num)) {
        	elements.push(num);
        }
    });

    return elements;
};