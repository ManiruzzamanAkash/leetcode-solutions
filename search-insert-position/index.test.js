const searchInsert = require("./index");

test("[1,3,5,6] array and target=5 would result 2", () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toStrictEqual(2);
});

test("[1,3,5,6] array and target=2 would result 1", () => {
  expect(searchInsert([1, 3, 5, 6], 2)).toStrictEqual(1);
});

test("[1,3,5,6] array and target=7 would result 4", () => {
  expect(searchInsert([1, 3, 5, 6], 7)).toStrictEqual(4);
});

test("[1,3,5,6] array and target=0 would result 0", () => {
  expect(searchInsert([1, 3, 5, 6], 0)).toStrictEqual(0);
});
