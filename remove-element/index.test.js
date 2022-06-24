const removeElement = require("./index");

test("[3,2,2,3] array and val=3 would result 2", () => {
  expect(removeElement([2, 2], 3)).toStrictEqual(2);
});

test("[0,1,2,2,3,0,4,2] array and val=2 would result 5", () => {
  expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toStrictEqual(5);
});

// Test with array
let nums = [0, 1, 2, 2, 3, 0, 4, 2]; // Input array
const val = 2;
let expectedNums = [0, 1, 3, 0, 4]; // The expected answer with correct length

test("nums = [0, 1, 2, 2, 3, 0, 4, 2] array would result 5 with array [0, 1, 3, 0, 4]", () => {
  expect(removeElement(nums, val)).toStrictEqual(5);

  // Test also the previous array
  expect(nums).toStrictEqual(expectedNums);
});
