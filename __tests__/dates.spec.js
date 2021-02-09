const Dates = require("../src/dates");

describe("Dates", () => {
  const target = new Dates();

  describe("Now method", () => {
    it("should be able to get the current date and time", () => {
      let today = new Date();
      let result = target.now();
      expect(result).toBeDefined();
      expect(result).toHaveLength(16);
      expect(result).toMatch(/\d{4}-\d{2}-\d{2}T\d{2}\:\d{2}/g);
      expect(result.slice(0, 11)).toBe(today.toISOString().slice(0, 11));
      expect(result.substring(11)).toBe(today.toISOString().substring(11,16));
    });
  });

  describe("Add method", () => {
    it("should be able to add days to a date", () => {
      const today = new Date();
      let sevenDaysFromNow = new Date(today.setDate(today.getDate() + 7));

      let result_string = target.add(7, "days");
      let result = new Date(result_string);
      expect(result.getDate()).toBe(sevenDaysFromNow.getDate());
    });
    it("should be able to add months to a date", () => {
      const today = new Date();
      let sevenMontsFromNow = new Date(today.setMonth((today.getMonth() + 1 ) + 7));

      let result_string = target.add(7, "month");
      let result = new Date(result_string);
      expect(result.getMonth()).toBe(sevenMontsFromNow.getMonth());
    });
    
    it("should be able to add years to a date", () => {
      const today = new Date();
      let sevenYearsFromNow = new Date(today.setYear(today.getFullYear() + 7));

      let result_string = target.add(7, "years");
      let result = new Date(result_string);
      expect(result.getFullYear()).toBe(sevenYearsFromNow.getFullYear());
    });
  });
});
