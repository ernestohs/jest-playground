const findIntersections = require("../src/intersection");

describe("Find Intersections", () => {
  it("should be able to merge intersections", () => {
    const input = [
      [1, 5],
      [2, 4],
      [5, 6],
      [9, 10],
    ];
    const expected = [
      [1, 6],
      [9, 10],
    ];

    const actual = findIntersections(input);
    expect(JSON.stringify(actual)).toBe(JSON.stringify(expected));
  });

  it("should be able to find if there is no intersection", () => {
    const input = [
      [1, 5],
      [7, 10],
      [20, 26],
      [29, 30],
    ];
    const expected = [
      [1, 5],
      [7, 10],
      [20, 26],
      [29, 30],
    ];
    const actual = findIntersections(input);
    expect(JSON.stringify(actual)).toBe(JSON.stringify(expected));
  });

  it("should be able to work with edge cases", () => {
    const input = [];
    const actual = findIntersections(input);
    expect(actual.length).toBe(0);
  });
});
