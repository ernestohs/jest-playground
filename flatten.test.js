const flatten = require('./flatten');

test('should return an array', () => {
    expect(Array.isArray(flatten())).toBeTruthy();
});