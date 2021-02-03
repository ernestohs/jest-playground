const singleCases = [
  {
    initial: [1, 2, 3, 4],
    input: "l",
    expected: [1, 2, 3, 4, "l"],
  },
  {
    initial: [1, 2, 3, 4],
    input: 5,
    expected: [1, 2, 3, 4, 5],
  },
  {
    initial: [1, 2, 3, 4],
    input:    [5, 6, 7],
    expected: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    initial: [],
    input: [5, 6, 7],
    expected: [5, 6, 7],
  },
  {
    initial: undefined,
    input: [5, 6, 7],
    expected: [5, 6, 7],
  },
  {
    initial: {},
    input: [5, 6, 7],
    expected: [5, 6, 7],
  },
  {
    initial: null,
    input: 5,
    expected: [5],
  },
];
exports.singleCases = singleCases;
