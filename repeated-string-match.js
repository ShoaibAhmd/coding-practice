/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {

    let repeats = Math.ceil(b.length / a.length);

    let repeatedString = a.repeat(repeats);

    if (repeatedString.includes(b)) {
        return repeats;
    }

    repeatedString += a;

    if (repeatedString.includes(b)) {
        return repeats + 1;
    }
    // repeats++;

    return -1;
};

console.log(repeatedStringMatch("abcd", "cdabcdab"));
