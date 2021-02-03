const Arrays = require("../src/arrays");
const { addAtIndexCases } = require("./addAtIndexCases");
const { multipleInputCases } = require("./multipleInputCases");
const { singleCases } = require("./singleCases");
describe("Arrays", () => {
  /**
   * Adds item to the array and returns the result as a new array.
   * If item is also an array, it will be concatenated instead of inserted.
   * index will control where item is added.
   */
  describe("Add method", () => {
    multipleInputCases.forEach(function (testCase) {
      it(`should add a ${testCase.type} into an array more than once`, () => {
        let target = new Arrays(testCase.dataset[0]);
        let result = target.add(testCase.dataset[1]);
        result = result.add(testCase.dataset[2]);
        expect(result._array).toEqual(testCase.expected);
      });
    });

    singleCases.forEach(function (testCase) {
      it("should add a value to the seed array", () => {
        let target = new Arrays(testCase.dataset[0]);
        let result = target.add(testCase.dataset[1]);
        expect(result._array).toEqual(testCase.expected);
      });
    });

    addAtIndexCases.forEach(function (testCase) {
      it("should add an item at index in the original array", () => {
        let target = new Arrays(testCase.initial);
        let result = target.add(testCase.input, testCase.index);
        expect(result._array).toEqual(testCase.expected);
      });
    });
  });
});
