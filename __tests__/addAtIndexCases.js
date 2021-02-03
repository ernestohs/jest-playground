const addAtIndexCases = [
  {
    initial: [1, 2, 3, 4],
    input: 8,
    index: 5,
    expected: [1, 2, 3, 4, , 8],
  },
  { initial: [1, 2, 3, 4], input: 8, index: 1, expected: [1, 8, 2, 3, 4] },
];
exports.addAtIndexCases = addAtIndexCases;
