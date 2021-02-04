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
      let result = target.add(7, "days");
      expect(result).toBe("2021-02-10T00:00");
    });
  });
});
