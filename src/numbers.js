module.exports = class Numbers {
  constructor(input = 0) {
    this.value = +input;
  }

  sum(addonValue) {
    this.value += addonValue;
    return this;
  }
  subs(subsValue) {
    this.value -= subsValue;
    return this;
  }
  multiply(multiplyValue) {
    this.value *= multiplyValue;
    return this;
  }
  divide(divideValue) {
    this.value /= divideValue;
    return this;
  }
  power(powValue) {
    this.value = Math.pow(this.value, powValue);
    return this;
  }

  toText() {
    var ONE_TO_NINETEEN = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];

    var TENS = [
      "ten",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];

    var SCALES = ["thousand", "million", "billion", "trillion"];

    function castBoolean(item) {
      return !!item;
    }

    function chunk(number) {
      var thousands = [];

      while (number > 0) {
        thousands.push(number % 1000);
        number = Math.floor(number / 1000);
      }

      return thousands;
    }

    function toEnglish(number) {
      var hundreds,
        tens,
        ones,
        words = [];

      if (number < 20) {
        return ONE_TO_NINETEEN[number - 1]; // may be undefined
      }

      if (number < 100) {
        ones = number % 10;
        tens = (number / 10) | 0; // equivalent to Math.floor(number / 10)

        words.push(TENS[tens - 1]);
        words.push(toEnglish(ones));

        return words.filter(castBoolean).join("-");
      }

      hundreds = (number / 100) | 0;
      words.push(toEnglish(hundreds));
      words.push("hundred");
      words.push(toEnglish(number % 100));

      return words.filter(castBoolean).join(" ");
    }

    // append the word for a scale. Made for use with Array.map
    function appendScale(chunk, exp) {
      var scale;
      if (!chunk) {
        return null;
      }
      scale = SCALES[exp - 1];
      return [chunk, scale].filter(castBoolean).join(" ");
    }

    let negative = this.value < 0 ? "negative " : "";

    let words = chunk(Math.abs(this.value))
      .map(toEnglish)
      .map(appendScale)
      .filter(castBoolean)
      .reverse()
      .join(" ");

    return `${negative}${words}`;
  }
};
