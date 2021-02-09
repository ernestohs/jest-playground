module.exports = class Dates {
    constructor(date) {

    }
  /**
   * Returns the current date time as ISO format. The number of milliseconds since January 1st, 1970 00:00:00 (UTC).
   * @return {string} The current time
   */
  now() {
    let today = new Date();
    return today.toISOString().slice(0,16);
  }
  /**
   * Adds n units to the date.
   */
  add(n, units) {
    if(units == "days"){
      let today = new Date();
      let newDate = new Date(today.getYear()+1900, today.getMonth(), today.getDate()+n);
      return newDate.toISOString().slice(0,16);
    }
    if(units == "month"){
      let today = new Date();
      let newDate = new Date(today.getYear()+1900, (today.getMonth() +1) + n, today.getDate());
      return newDate.toISOString().slice(0,16);
    }
    if(units == "years"){
      let today = new Date();
      let newDate = new Date(today.getYear()+1900+n, today.getMonth(), today.getDate());
      return newDate.toISOString().slice(0,16);
    }

  }
};
