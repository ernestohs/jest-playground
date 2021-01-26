var flatten = function (arr){
    if (!Array.isArray(arr)){
        return [];
    }
    var flattend = [];
    (function flat(array, depth) {
      for (let el of array) {
        if (Array.isArray(el) && depth > 0) {
          flat(el, depth - 1);
        } else {
          flattend.push(el);
        }
      }
    })(arr, Math.floor(Infinity));
    return flattend;
}
module.exports =flatten;