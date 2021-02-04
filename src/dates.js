module.exports = class Dates {
    constructor(date) {

    }
  /**
   * Returns the current time as a Unix timestamp. The number of milliseconds since January 1st, 1970 00:00:00 (UTC).
   */
  now() {
    let today = new Date();
    return today.toISOString().slice(0,16);
  }
  /**
   * Adds n units to the date.
   */
  add(n, units) {
    throw new Error("not implemented");
  }
};
