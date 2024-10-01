/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const characterMap = {};  // Stores the last occurrence of each character
    let maxLength = 0;        // Stores the maximum length of substring found
    let start = 0;            // Start pointer for the sliding window

    for (let i = 0; i < s.length; i++) {
        const element = s[i];

        // If the character is found and is within the current window
        if (characterMap[element] !== undefined && characterMap[element] >= start) {
            start = characterMap[element] + 1;  // Move start pointer to the right of the last occurrence
        }

        characterMap[element] = i;  // Update the last occurrence of the character

        // Calculate the current length of the substring and update the maximum length
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3 ("wke")
