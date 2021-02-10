const Numbers = require('../src/numbers');
describe('Numbers', () => {
  describe('Creation operations', () => {
    it('should be zero when there not parameter', () => {
      let target = new Numbers();
      expect(target).toEqual(0);
    });
    it('should be zero when the parameter is NaN', () => {
      let stringTarget = new Numbers('a');
      let undefinedTarget = new Numbers(undefined);
      let nullTarget = new Numbers(null);
      let arrayTarget = new Numbers([1, 2]);
      let objectTarget = new Numbers({ number: 2 });
      let booleanTarget = new Numbers(false);
      expect(stringTarget).toEqual(0);
      expect(undefinedTarget).toEqual(0);
      expect(nullTarget).toEqual(0);
      expect(arrayTarget).toEqual(0);
      expect(objectTarget).toEqual(0);
      expect(booleanTarget).toEqual(0);
    });
    it('should be the first parameter when there are n parameters', () => {
      let target = new Numbers(1, 2);
      expect(target).toEqual(1);
    });
  });
  describe('Arithmetic operations', () => {
    it('should add two numbers', () => {
      let target = new Numbers(1);
      let result = target.sum(2);
      expect(result).toEqual(3);
    });
    it('should substract two numbers', () => {
      let target = new Numbers(5);
      let result = target.subs(2);
      expect(result).toEqual(3);
    });
    it('should multiply two numbers', () => {
      let target = new Numbers(1);
      let result = target.multiply(2);
      expect(result).toEqual(2);
    });
    it('should divide two numbers', () => {
      let target = new Numbers(4);
      let result = target.divide(2);
      expect(result).toEqual(2);
    });
    it('should remaind two numbers', () => {
      let target = new Numbers(4);
      let result = target.divide(2);
      expect(result).toEqual(0);
    });
    it('should be the power in base n', () => {
      let target = new Numbers(4);
      let result = target.power(2);
      expect(result).toEqual(16);
    });
  });
});
