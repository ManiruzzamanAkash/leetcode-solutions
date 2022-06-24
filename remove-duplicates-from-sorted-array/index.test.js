const removeDuplicates = require("./index");

test("[1, 1, 2] array would result 2", () => {
  expect(removeDuplicates([1, 2])).toStrictEqual(2);
});

test("[0,0,1,1,1,2,2,3,3,4] array would result 5", () => {
  expect(removeDuplicates([0, 1, 2, 3, 4])).toStrictEqual(5);
});

// Test with array
const nums = [1, 1, 2, 4, 4, 5]; // Input array
let expectedNums = [1, 2, 4, 5, 4, 5]; // The expected answer with correct length

test("nums = [1, 1, 2, 4, 4, 5] array would result 4 with array [1, 2, 4, 5, 4, 5]", () => {
  expect(removeDuplicates(nums)).toStrictEqual(4);

  // Test also the previous array
  expect(nums).toStrictEqual(expectedNums);
});
