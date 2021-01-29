const Arrays = require("../src/arrays");
describe("Arrays", () => {
  /**
   * Adds item to the array and returns the result as a new array.
   * If item is also an array, it will be concatenated instead of inserted.
   * index will control where item is added.
   */
  describe("Add method", () => {
    it("should add a number into an array more than once", () => {
      let target = new Arrays([1, 2, 3, 4]);
      let result = target.add(5);
      result = result.add(6);
      expect(result._array).toEqual([1, 2, 3, 4, 5, 6]);
    });
    it("should add a number at the index of the original more than once", () => {
      let target = new Arrays([1, 2, 3, 4]);
      let result = target.add(8, 1);
      result = target.add(9, 1);
      expect(result._array).toEqual([1, 9, 8, 2, 3, 4]);
    });
    it("should join two arrays into a new more than once", () => {
      let target = new Arrays([1, 2, 3, 4]);
      let result = target.add([12, 13, 14]);
      result = result.add([20, 21, 22]);
      expect(result._array).toEqual([1, 2, 3, 4, 12, 13, 14, 20, 21, 22]);
    });
    it("should add incorrect param into an existent array", () => {
      // new Array([1,2,3,4]).add(l) => [1,2,3,4,l]
      let tarjet = new Arrays([1, 2, 3, 4]);
      let result = tarjet.add("l");
      expect(result._array).toEqual([1, 2, 3, 4, "l"]);
    });
    it("should add a number at incorrect index if the original array", () => {
      // new Array([1,2,3,4]).add(8,5) => [1,2,3,4, ,8]
      let target = new Arrays([1, 2, 3, 4]);
      let result = target.add(8, 5);
      expect(result._array).toEqual([1, 2, 3, 4, , 8]);
    });
    it("should add a number into an existent array", () => {
      // new Array([1,2,3,4]).add(5) => [1, 2, 3, 4, 5]
      let target = new Arrays([1, 2, 3, 4]);
      let result = target.add(5);
      expect(result._array).toEqual([1, 2, 3, 4, 5]);
    });
    it("should add a number at the index of the original array", () => {
      // new Array([1,2,3,4]).add(8, 1) => [1, 8, 2, 3, 4]
      let target = new Arrays([1, 2, 3, 4]);
      let result = target.add(8, 1);
      expect(result._array).toEqual([1, 8, 2, 3, 4]);
    });
    it("should join two arrays into a new one", () => {
      // new Array([1,2,3,4]).add([5,6,7]) => [1, 2, 3, 4, 5, 6, 7]
      let target = new Arrays([1, 2, 3, 4]);
      let result = target.add([5, 6, 7]);
      expect(result._array).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    it("should return the same array recibed from parameter", () => {
      let target = new Arrays([]);
      let result = target.add([5, 6, 7]);
      expect(result._array).toEqual([5, 6, 7]);
    });
    it("should return the same array recibed from parameter", () => {
      let target = new Arrays(undefined);
      let result = target.add([5, 6, 7]);
      expect(result._array).toEqual([5, 6, 7]);
    });
    it("should return the same array recibed from parameter", () => {
      let target = new Arrays(null);
      let result = target.add(5);
      expect(result._array).toEqual([5]);
    });
    it("should return the same array recibed from parameter", () => {
      let target = new Arrays({});
      let result = target.add([5, 6, 7]);
      expect(result._array).toEqual([5, 6, 7]);
    });
  });
});
