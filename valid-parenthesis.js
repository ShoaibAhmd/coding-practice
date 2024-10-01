/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    
    let open = 0;
    let close = 0;

    for (let i=0; i<s.length; i++) {
        const currentBracket = [s[i]];

        if (s[i] === '(') {
            open++;
        } else if (s[i] === ')') {
            if (open > 0) {
                open--;
            } else {
                close++;
            }
        } 

    }

    console.log('open', open);
    console.log('close', close);

    return open + close;
};

console.log(minAddToMakeValid("()))(("));