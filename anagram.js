function isAnagram(s, t) {
    lettersDict = {};

    for (let i = 0; i < s.length; i++) {
        const currentLetter = s[i];

        if (lettersDict[currentLetter]) {
            lettersDict[currentLetter] += 1;
        } else {
            lettersDict[currentLetter] = 1
        }
    }

    for (let i = 0; i < t.length; i++) {
        const currentLetter = t[i];

        if (!lettersDict[currentLetter]) {
            return false;
        } else {
            lettersDict[currentLetter] -= 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        const currentLetter = s[i];

         if (lettersDict[currentLetter] != 0) {
            return false;
         }
    }

    return true;
}


console.log(isAnagram("ab", "a"));
