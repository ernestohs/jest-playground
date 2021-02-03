const Arrays = require("../src/arrays");
const { addAtIndexCases } = require("../__cases_/addAtIndexCases");
const { multipleInputCases } = require("../__cases_/multipleInputCases");
const { singleCases } = require("../__cases_/singleCases");
describe("Arrays", () => {
  /**
   * Adds item to the array and returns the result as a new array.
   * If item is also an array, it will be concatenated instead of inserted.
   * index will control where item is added.
   */
  describe("Add method", () => {
    multipleInputCases.forEach(function (testCase) {
      it(`should add a ${testCase.type} into an array more than once`, () => {
        let target = new Arrays(testCase.initial);
        let result = target.add(testCase.firstInput);
        result = result.add(testCase.secondInput);
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
