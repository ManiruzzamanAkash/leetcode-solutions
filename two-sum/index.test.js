const twoSum = require("./index");

test("[2, 7, 11, 15] array and target 9 would result [0, 1]", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});

test("[3, 3] array and target 6 would result [0, 1]", () => {
  expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);
});

test("[3, 2, 4] array and target 6 would result [1, 2]", () => {
  expect(twoSum([3, 2, 4], 6)).toStrictEqual([1, 2]);
});

test("[3, 2, 3] array and target 6 would result [0, 2]", () => {
  expect(twoSum([3, 2, 3], 6)).toStrictEqual([0, 2]);
});
