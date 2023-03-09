module.exports = function findIntersections(points) {
  let result = [];

  if (points && points.length) {
    points.sort((a, b) => a[0] - b[0]);

    let current = points[0];

    for (let index = 0; index < points.length; index++) {
      const next = points[index];
      if (current[1] >= next[0]) {
        current[1] = Math.max(current[1], next[1]);
      } else {
        result.push(current);
        current = next;
      }
    }
    result.push(current);
  }
  return result;
}