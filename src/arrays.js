module.exports = class Arrays {
  /***
   *
   * @method construct(arr)
   * @returns Array
   * @static
   *
   * @param {array} arr
   */
  constructor(arr) {}
  /***
   * @method add(item, [index])
   * @returns Array
   * @short Adds `item` to the array and returns the result as a new array.
   * @extra If `item` is also an array, it will be concatenated instead of
   *        inserted. [index] will control where `item` is added. Use `append`
   *        to modify the original array.
   *
   * @example
   *
   *   new Array([1,2,3,4]).add(5)       -> [1,2,3,4,5]
   *   new Array([1,2,3,4]).add(8, 1)    -> [1,8,2,3,4]
   *   new Array([1,2,3,4]).add([5,6,7]) -> [1,2,3,4,5,6,7]
   *
   * @param {ArrayElement|Array} item
   * @param {number} [index]
   *
   */
  add(item, index) {
    throw new Error("Not Implemented");
  }
  /***
   * @method at(index, [loop] = false)
   * @returns ArrayElement
   * @short Gets the element(s) at `index`.
   * @extra When [loop] is true, overshooting the end of the array will begin
   *        counting from the other end. `index` can be negative. If `index` is
   *        an array, multiple elements will be returned.
   *
   * @example
   *
   *   new Array([1,2,3]).at(0)       -> 1
   *   new Array([1,2,3]).at(2)       -> 3
   *   new Array([1,2,3]).at(4)       -> undefined
   *   new Array([1,2,3]).at(4, true) -> 2
   *   new Array([1,2,3]).at(-1)      -> 3
   *   new Array([1,2,3]).at([0, 1])  -> [1, 2]
   *
   * @param {number|number[]} index
   * @param {boolean} [loop]
   *
   */
  at(index, loop) {
    throw new Error("Not Implemented");
  }
};
