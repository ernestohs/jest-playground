const singleCases = [
  {
    dataset: [[1, 2, 3, 4], "l"],
    expected: [1, 2, 3, 4, "l"],
  },
  {
    dataset: [[1, 2, 3, 4], 5],
    expected: [1, 2, 3, 4, 5],
  },
  {
    dataset: [
      [1, 2, 3, 4],
      [5, 6, 7],
    ],
    expected: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    dataset: [[], [5, 6, 7]],

    expected: [5, 6, 7],
  },
  {
    dataset: [undefined, [5, 6, 7]],

    expected: [5, 6, 7],
  },
  {
    dataset: [{}, [5, 6, 7]],
    expected: [5, 6, 7],
  },
  {
    dataset: [null, 5],

    expected: [5],
  },
];
exports.singleCases = singleCases;
