const Numbers = require("../src/numbers");
describe("Numbers", () => {
  describe("Creation operations", () => {
    it("should be zero when there is no parameter", () => {
      let target = new Numbers();
      expect(target.value).toEqual(0);
    });

    describe("handle errors on constructor", () => {
      it('should return NaN wen value is "a" ', () => {
        let stringTarget = new Numbers("a");
        expect(stringTarget.value).toEqual(NaN);
      });
      it("should return zero wen value is undefined ", () => {
        let undefinedTarget = new Numbers(undefined);
        expect(undefinedTarget.value).toEqual(0);
      });
      it("should return zero wen value is null ", () => {
        let nullTarget = new Numbers(null);
        expect(nullTarget.value).toEqual(0);
      });
      it("should return NaN wen value is [1, 2] ", () => {
        let arrayTarget = new Numbers([1, 2]);
        expect(arrayTarget.value).toEqual(NaN);
      });
      it("should return NaN wen value is { number: 2 } ", () => {
        let objectTarget = new Numbers({ number: 2 });
        expect(objectTarget.value).toEqual(NaN);
      });
      it("should return zero wen value is false ", () => {
        let booleanTarget = new Numbers(false);
        expect(booleanTarget.value).toEqual(0);
      });
    });
    it("should be the first parameter when there are n parameters", () => {
      let target = new Numbers(1, 2);
      expect(target.value).toEqual(1);
    });
  });
  describe("Arithmetic operations", () => {
    it("should add two numbers", () => {
      let target = new Numbers(1);
      let result = target.sum(2);
      expect(result.value).toEqual(3);
    });
    it("should substract two numbers", () => {
      let target = new Numbers(5);
      let result = target.subs(2);
      expect(result.value).toEqual(3);
    });
    it("should multiply two numbers", () => {
      let target = new Numbers(1);
      let result = target.multiply(2);
      expect(result.value).toEqual(2);
    });
    it("should divide two numbers", () => {
      let target = new Numbers(4);
      let result = target.divide(2);
      expect(result.value).toEqual(2);
    });
    it("should be the power in base n", () => {
      let target = new Numbers(4);
      let result = target.power(2);
      expect(result.value).toEqual(16);
    });
  });

  describe("Convert number to text", ()=>{
    it('should convert a number to human readable text', () =>{
      let target = new Numbers(4);
      let result = target.toText();
      expect(result).toBe('four');
    });
    it('should convert a number to human readable text', () =>{
      // Chava
      let target = new Numbers(1);
      let result = target.toText();
      expect(result).toBe('one');
    });
    it('should convert a number to human readable text', () =>{
      //Alberto
      let target = new Numbers(1500);
      let result = target.toText();
      expect(result).toBe('one thousand five hundred');
    }); 
    it('should convert 14 to "fourteen"', () =>{
      // Luis
      let target = new Numbers(14);
      let result = target.toText();
      expect(result).toBe('fourteen');
    });
    it('should convert a number to human readable text', () =>{
      //Alberto
      let target = new Numbers(13904);
      let result = target.toText();
      expect(result).toBe('thirteen thousand nine hundred four');
    });
    it('should convert NaN input to ""', () =>{
      // Luis
      let target = new Numbers(NaN);
      let result = target.toText();
      expect(result).toBe('');
    });
    it('should convert a number to human readable text', () =>{
      // Chava
      let target = new Numbers(-1);
      let result = target.toText();
      expect(result).toBe('negative one');
    });
    it('should convert a number to human readable text', () =>{
      //Alberto
      let target = new Numbers(1000000000000000);
      let result = target.toText();
      expect(result).toBe('one quadrillion');
    });
    it('should convert a number to human readable text', () =>{
      //Alberto
      let target = new Numbers(1000000000000000000);
      let result = target.toText();
      expect(result).toBe('one quintillion');
    });
    it('should convert a number to human readable text', () =>{
      //Alberto
      let target = new Numbers(1000000000000000000000);
      let result = target.toText();
      expect(result).toBe('one sextillion');
    });
    it('should convert a number to human readable text', () =>{
      //Alberto
      let target = new Numbers(1000000000000000000000000);
      let result = target.toText();
      expect(result).toBe('one septillion');
    });
    it('should convert a number to human readable text', () =>{
      //Alberto
      let target = new Numbers(1000000000000000000000000000);
      let result = target.toText();
      expect(result).toBe('one octillion');
    });
    it('should convert a number to human readable text', () =>{
      //Alberto
      let target = new Numbers(1000000000000000000000000000000);
      let result = target.toText();
      expect(result).toBe('one nonillion');
    });
    it('should convert a number to human readable text', () =>{
      //Alberto
      let target = new Numbers(1000000000000000000000000000000000);
      let result = target.toText();
      expect(result).toBe('one decillion');
    });
    it('should convert a number to human readable text', () =>{
      //Alberto
      let target = new Numbers(1000000000000000000000000000000000000);
      let result = target.toText();
      expect(result).toBe('one undecillion');
    });
    it('should convert a number to human readable text', () =>{
      //Alberto
      let target = new Numbers(1000000000000000000000000000000000000000);
      let result = target.toText();
      expect(result).toBe('one duodecillion');
    });
    it('should convert a number to human readable text', () =>{
      //Alberto
      let target = new Numbers(1000000000000000000000000000000000000000000);
      let result = target.toText();
      expect(result).toBe('one tredecillion');
    });
    it('should convert a number to human readable text', () =>{
      //Alberto
      let target = new Numbers(1000000000000000000000000000000000000000000000);
      let result = target.toText();
      expect(result).toBe('one quattuordecillion');
    });
    it('should convert a number to human readable text', () =>{
      //Alberto
      let target = new Numbers('10');
      let result = target.toText();
      expect(result).toBe('ten');
    });
    it('should convert a number to human readable text', () =>{
      //Alberto
      let target = new Numbers('10^1');
      let result = target.toText();
      expect(result).toBe('ten');
    });
    it('should convert a number to human readable text', () =>{
      //Alberto
      let target = new Numbers('10^2');
      let result = target.toText();
      expect(result).toBe('one hundred');
    });
    it('should convert a number to human readable text', () =>{
      //Alberto
      let target = new Numbers('10^3');
      let result = target.toText();
      expect(result).toBe('one thousand');
    });
    it('should convert a number to human readable text', () =>{
      //Alberto
      let target = new Numbers('10^9');
      let result = target.toText();
      expect(result).toBe('one billion');
    });
    it('should convert a number to human readable text', () =>{
      //Alberto
      let target = new Numbers('10^12');
      let result = target.toText();
      expect(result).toBe('one trillion');
    });
    it('should convert a number to human readable text', () =>{
      //Alberto
      let target = new Numbers(1.1);
      let result = target.toText();
      expect(result).toBe('one point one');
    });
    it('should convert a number to human readable text', () =>{
      //Alberto
      let target = new Numbers(10.1);
      let result = target.toText();
      expect(result).toBe('ten point one');
    });
    it('should convert a number to human readable text', () =>{
      //Alberto
      let target = new Numbers(10.10);
      let result = target.toText();
      expect(result).toBe('ten point one');
    });
    it('should convert a number to human readable text', () =>{
      //Alberto
      let target = new Numbers(10.100000000000);
      let result = target.toText();
      expect(result).toBe('ten point one');
    });
    it('should convert a number to human readable text', () =>{
      //Alberto
      let target = new Numbers(10.11);
      let result = target.toText();
      expect(result).toBe('ten point eleven');
    });
  });

});
