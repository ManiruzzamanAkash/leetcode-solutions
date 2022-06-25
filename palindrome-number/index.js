/**
 * Check if a number is palindrome or not.
 *
 * @param {number} x
 *
 * @return {boolean}
 */
var isPalindrome = function(x) {
  /**
   * Solution 1 : JavaScript way
   */
  //   const reverseNumber = x.toString().split("").reverse().join("");
  //   return x == reverseNumber;

  /**
   * Solution 2: Traditional Programming way by reversing
   */
  let initialX = x,
    reverseNumber = 0;

  // Reverse the number.
  while (x != 0) {
    reverseNumber = parseInt(reverseNumber * 10 + parseInt(x % 10));
    x = parseInt(x / 10);
  }

  // Handle for negative numbers.
  if (initialX < 0) {
    return initialX === -1 * reverseNumber;
  }

  return initialX === reverseNumber;
};

module.exports = isPalindrome;
