const isPalindrome = require("./index");

test("121 would result true", () => {
  expect(isPalindrome(121)).toStrictEqual(true);
});

test("-121 would result false", () => {
  expect(isPalindrome(-121)).toStrictEqual(false);
});

test("10 would result false", () => {
  expect(isPalindrome(10)).toStrictEqual(false);
});

test("12121 would result false", () => {
  expect(isPalindrome(12121)).toStrictEqual(true);
});
