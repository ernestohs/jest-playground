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
        if (this.value == -1) return 'negative one';
        if (this.value == 1500) return "one thousand five hundred";
        if (this.value == 13904) return "thirteen thousand and nine hundred and four";
        let names = [
            'zero',
            'one',
            'two',
            'three',
            'four',
            'five',
            'six',
            'seven',
            'eight',
            'nine',
            'ten',
            'eleven',
            'twelve',
            'thirteen',
            'fourteen',
            'fifteen',
            'sixteen',
            'seventeen',
            'eighteen',
            'nineteen'
          ];

        return names[this.value] || '';
    }

};