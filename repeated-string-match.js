/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {

    let repeats = Math.ceil(b.length / a.length);

    let repeatedString = a.repeat(repeats);

    if (repeatedString.includes(b)) {
        return repeats
    } else if (!repeatedString.includes(b)) {
        repeatedString += a;
        repeats++;
        if (repeatedString.includes(b)) {
            return repeats; 
        }
    } else {
        return -1;
    }
};

console.log(repeatedStringMatch("abcd", "cdabcdab"));