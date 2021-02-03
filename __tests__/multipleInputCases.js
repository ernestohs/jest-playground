const multipleInputCases = [
  {
    type: "array",
    dataset: [
      [1, 2, 3, 4],
      [12, 13, 14],
      [20, 21, 22],
    ],
    expected: [1, 2, 3, 4, 12, 13, 14, 20, 21, 22],
  },
  {
    type: "number",
    dataset: [[1, 2, 3, 4], 5, 6],
    expected: [1, 2, 3, 4, 5, 6],
  },
];
exports.multipleInputCases = multipleInputCases;
