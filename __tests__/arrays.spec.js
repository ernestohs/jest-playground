const Arrays = require('../src/arrays');
describe('Arrays', ()=>{
    /**
     * Adds item to the array and returns the result as a new array. 
     * If item is also an array, it will be concatenated instead of inserted.
     * index will control where item is added.
     * Use append to modify the original array.
     */    
    it('Adds item to the array and returns the result as a new array.', ()=>{
        // new Array([1,2,3,4]).add(5) => [1, 2, 3, 4, 5]
        // new Array([1,2,3,4]).add(8, 1) => [1, 8, 2, 3, 4]
        // new Array([1,2,3,4]).add([5,6,7]) => [1, 2, 3, 4, 5, 6, 7]
        let target = new Array([1,2,3,4]);
    });

    /**
     * Gets the element(s) at `index`. 
     * When `loop` is true, overshooting the end of the array will begin counting from the other end.
     * `index` can be negative. 
     * If `index` is an array, multiple elements will be returned.
     */    
    it('Gets the element(s) at index.', ()=>{  
        // new Array([1,2,3]).at(0)       => 1
        // new Array([1,2,3]).at(2)       => 3
        // new Array([1,2,3]).at(4)       => undefined
        // new Array([1,2,3]).at(4, true) => 2
        // new Array([1,2,3]).at(-1)      => 3
        // new Array([1,2,3]).at([0, 1])  => [1, 2]
        let target = new Array([1,2,3]);
    });
});