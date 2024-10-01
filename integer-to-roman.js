/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const integers = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    };

    let number = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        let toAdd = 0;
        let combined = s[i - 1] + s[i];
        if (s[i - 1] && integers[combined]) {
            toAdd = integers[combined];
            i--;
        } else if (integers[s[i]]) {
            toAdd = integers[s[i]];
        }
        number += toAdd;
    }
    return number;
};

console.log(romanToInt('MCMXCIV')); // 3
