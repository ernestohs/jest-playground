var flatten = require('../src/flatten');
const nested_array = [
  [1, 2],
  [3, 4],
  [[5], [6]],
  [[[7], [8]], [9]],
];

const expected_flatten = [1, 2, 3, 4, 5, 6, 7, 8, 9];

test("should return an array", () => {
  expect(Array.isArray(flatten(nested_array))).toBeTruthy();
});

test("should return a flat array", () => {
  let result = flatten(nested_array);
  expect(result.length).toBe(expected_flatten.length);
  result.forEach((element, index) => {
      expect(element).toBe(expected_flatten[index]);
  });
});
