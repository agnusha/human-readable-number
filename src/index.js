module.exports = function toReadable(number) {
    let numbersDictionary = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred"
    };
    if (number == 100)
        return 'one ' + numbersDictionary[number];
    else if (numbersDictionary.hasOwnProperty(number))
        return numbersDictionary[number];
    let res = '';
    if (number/100 > 1) {
        let hundreds = Math.trunc(number/100);
        res += numbersDictionary[hundreds] + " " + numbersDictionary[100];
        number = number - hundreds * 100;
        
        if (numbersDictionary.hasOwnProperty(number) && number) 
            return res+' '+ numbersDictionary[number];
    }
    if (number) {
        let ones = number % 10;
        if (res)
            res += ' ';
        res += numbersDictionary[number - ones] + ' ' + numbersDictionary[ones];
    }
    return res;
}
